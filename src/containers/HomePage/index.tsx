import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../components/Pagination';
import Table from '../../components/Table';

import { chunkArray } from 'shared/constant/functions';
import { getUsers } from 'redux/actions/users';
import { RootState } from 'redux/reducers/rootReducer';

import './HomePage.scss';

const COLUMNS = [
  { dataIndex: 'avatar', title: 'Avatar', isImage: true },
  { dataIndex: 'name', title: 'Name' },
  { dataIndex: 'email', title: 'Email' },
  { dataIndex: 'phone', title: 'Phone' },
];

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, users, totalUser } = useSelector((state: RootState) => state.usersReducer);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [dataUsersCurrent, setDataUsersCurrent] = useState<any[]>([]);

  const handleChangePagination = () => {
    const newDataUsers = chunkArray(users, Math.ceil(perPage))[currentPage - 1];
    setLoading(true);
    setDataUsersCurrent(newDataUsers);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (totalUser) {
      handleChangePagination();
    }
  }, [perPage, currentPage, totalUser]);

  useEffect(() => {
    dispatch(getUsers({ params: {} }));
  }, []);

  return (
    <div className="home-page">
      <Table columns={COLUMNS} dataSource={dataUsersCurrent} loading={loading || isLoading}>
        <Pagination
          position="right"
          total={totalUser}
          per_page={perPage}
          setCurrentPage={setCurrentPage}
          setPerPage={setPerPage}
          current_page={currentPage}
        />
      </Table>
    </div>
  );
};

export default HomePage;
