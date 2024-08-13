import React, { Key } from 'react';
import { Author } from '../../interfaces/Interfaces';
import { Avatar, Card, Alert } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Meta } = Card;

const AuthorCard = ({ author, key }: { author: Author, key: Key }) => {
  const { t } = useTranslation();
  return (
    <Card
      title={t("author")}
      key={key}
      className="w-96"
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title={<Alert
          message={author.name}
          type="info"
        />}
        description={<Alert
          message={`Age: ${author.age}`}
          type="success"
        />}
      />
    </Card>
  )
}

export default AuthorCard