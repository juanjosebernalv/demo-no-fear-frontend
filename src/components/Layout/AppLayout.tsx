import React from 'react';
import { Layout, Select } from 'antd';
import { GlobalOutlined, DownCircleTwoTone } from '@ant-design/icons'; // Add this line
import { useTranslation } from 'react-i18next';
import { AppContext } from '../AppContext/AppContext';
const { Header } = Layout;




export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { t, i18n } = useTranslation();

  const { setLanguage } = React.useContext(AppContext);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    const selected = value;
    setLanguage(selected);
    i18n.changeLanguage(selected);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <Layout>
      <Header
        className="flex bg-primary top-0 sticky z-50 w-full min-w-full align-middle justify-between justify-items-around items-center"
      >
        <h1 className="text-secondary font-bold h-full text-xl text-center pt-4">
          {t("welcome")}
        </h1>
        <Select
          showSearch
          placeholder={t("select_language")}
          defaultValue="es"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          dropdownStyle={{ backgroundColor: "#B6F501" }}
          suffixIcon={<DownCircleTwoTone />}
          options={[
            {
              value: 'es',
              label: <div className="flex gap-5"><GlobalOutlined />Español</div>,
            },
            {
              value: 'en',
              label: <div className="flex gap-5"><GlobalOutlined />English</div>,
            },
          ]}
        />



      </Header>
      <div>{children}</div>

    </Layout>
  )
}
