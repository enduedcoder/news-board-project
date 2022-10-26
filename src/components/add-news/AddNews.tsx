import { useEffect, useMemo, useRef } from 'react';
import Button from '../ui/button/Button';
import InputField from '../ui/input-field/InputField';
import './AddNews.scss';
import { useParams } from 'react-router-dom';
import { useLoginContext } from '../../hooks/useLoginContext';
import TextArea from '../ui/textarea/TextArea';
import { API_BASE_URL, NewsDetailsType } from '../utils';

interface AddNewsType {
  isEdit?: boolean;
  data?: NewsDetailsType;
  addNews: (arg: NewsDetailsType) => void;
  onToggleForm?: (arg: boolean) => void;
}

interface RequestOptionsType {
  method?: string;
  headers?: { 'Content-Type': string };
  body?: string;
}

export default function AddNews({
  isEdit = false,
  data,
  addNews,
  onToggleForm,
}: AddNewsType) {
  const handle = useParams();
  const { email } = useLoginContext();

  const titleRef = useRef<HTMLInputElement>(null!);
  const descriptionRef = useRef<HTMLTextAreaElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const imageRef = useRef<HTMLInputElement>(null!);

  const AddBodyObject: NewsDetailsType = {};
  const EditBodyObject: NewsDetailsType = useMemo(() => {
    return {};
  }, []);
  const requestOptions: RequestOptionsType = {};

  useEffect(() => {
    if (isEdit) {
      const title = data?.title;
      const description = data?.description;
      const author = data?.author;
      const imageUrl = data?.imageURL;
      if (title) {
        titleRef.current.value = title;
      }
      if (description) {
        descriptionRef.current.value = description;
      }
      if (author) {
        emailRef.current.value = author;
      }
      if (imageUrl) {
        imageRef.current.value = imageUrl;
      }

      EditBodyObject.id = data?.id;
      EditBodyObject.CreatedAt = data?.CreatedAt;
      EditBodyObject.author = emailRef?.current?.value;
      EditBodyObject.boardId = data?.boardId;
      EditBodyObject.description = descriptionRef?.current?.value;
      EditBodyObject.imageURL = imageRef?.current?.value;
      EditBodyObject.status = data?.status;
      EditBodyObject.title = titleRef?.current?.value;
    }
  }, [
    EditBodyObject,
    data?.CreatedAt,
    data?.author,
    data?.boardId,
    data?.description,
    data?.id,
    data?.imageURL,
    data?.status,
    data?.title,
    isEdit,
  ]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      EditBodyObject.id = data?.id;
      EditBodyObject.CreatedAt = data?.CreatedAt;
      EditBodyObject.author = emailRef.current?.value;
      EditBodyObject.boardId = data?.boardId;
      EditBodyObject.description = descriptionRef.current?.value;
      EditBodyObject.imageURL = imageRef.current?.value;
      EditBodyObject.status = data?.status;
      EditBodyObject.title = titleRef.current?.value;
    } else {
      AddBodyObject.boardId = handle.boardId;
      AddBodyObject.author = email;
      AddBodyObject.title = titleRef?.current?.value;
      AddBodyObject.description = descriptionRef?.current?.value;
      AddBodyObject.imageURL = imageRef?.current?.value;
    }

    requestOptions.method = isEdit ? 'PUT' : 'POST';
    requestOptions.headers = { 'Content-Type': 'application/json' };
    requestOptions.body = JSON.stringify(
      isEdit ? EditBodyObject : AddBodyObject
    );

    fetch(`${API_BASE_URL}/news`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        imageRef.current.value = '';

        addNews(data);
      });
  };

  const handleCancel = () => {
    onToggleForm?.(true);
  };

  return (
    <div
      className="form-container"
      data-testid="form-container-test-id"
    >
      <form onSubmit={submit}>
        <InputField
          id="title"
          inputLabel={isEdit ? 'Update title' : 'Enter Title'}
          inputName="title"
          inputPlaceholder={isEdit ? 'Update title' : 'Enter Title'}
          ref={titleRef}
          onInputChange={(e) => {
            titleRef.current.value = (
              e.target as HTMLInputElement
            ).value;
          }}
        />

        <br />

        <TextArea
          id="description"
          textAreaLabel={
            isEdit ? 'Update description' : 'Enter Description'
          }
          textAreaName="description"
          textAreaPlaceholder={
            isEdit ? 'Update description' : 'Enter description'
          }
          ref={descriptionRef}
        />

        <br />

        {isEdit && (
          <InputField
            id="email"
            inputLabel={isEdit ? 'Update email' : 'Enter email'}
            inputName="email"
            inputPlaceholder="Update email"
            ref={emailRef}
            onInputChange={(e) => console.log(e.target)}
          />
        )}

        <br />

        <InputField
          id="imageUrl"
          inputLabel={isEdit ? 'Update imageUrl' : 'Enter imageUrl'}
          inputName="imageUrl"
          inputPlaceholder={
            isEdit ? 'Update imageUrl' : 'Enter imageUrl'
          }
          ref={imageRef}
        />

        <br />

        <div className="buttons-container">
          <Button classes="add-btn">
            {isEdit ? 'Update News' : 'Add'}
          </Button>
          <Button classes="cancel-btn" onButtonClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
