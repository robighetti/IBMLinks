import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import cheerio from 'cheerio';

import backgroundImage from '../../assets/background.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

import Loader from '../../components/Loader';

import { Container, Sidebar, Content, List } from './styles';

interface IFormData {
  search: string;
}

interface IRequest {
  id: string;
  url: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [links, setLinks] = useState<IRequest[]>([]);
  const [refresh, setRefresh] = useState(false);

  const loadLinks = useCallback(async () => {
    const response = await api.get<IRequest[]>('/links');

    setLinks(response.data);
  }, []);

  useEffect(() => {
    loadLinks();
  }, [refresh]);

  const getUrl = useCallback(async (text: string) => {
    if (!text) return null;

    const a = document.createElement('a');

    a.href = text;

    const { protocol, host, pathname, search, hash } = a;
    const url = `${protocol}//${host}${pathname}${search}${hash}`;

    if (host === window.location.host) return null;

    return url;
  }, []);

  const handleSubmit = useCallback(async (data: IFormData) => {
    setRefresh(true);
    const url = await getUrl(`http://${data.search}`);
    if (!url) return null;

    await api.post('/links', { url });

    setRefresh(false);
  }, []);

  return (
    <Container>
      {refresh && <Loader />}
      <Sidebar>
        <h1>Link finder</h1>
        <img src={backgroundImage} alt="Link Finder" />
        <hr />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <strong>Digite a url de pesquisa</strong>
          <Input
            name="search"
            icon={FiSearch}
            placeholder="Digite sua pesquisa aqui"
          />

          <Button type="submit">Buscar</Button>
        </Form>
      </Sidebar>
      <Content>
        <List>
          {links.map((url) => (
            <li key={url.id}>
              <div>
                <a href="#">{url.url}</a>
              </div>
            </li>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Home;
