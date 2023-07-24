import React from 'react'
import { PrismaClient } from '@prisma/client'
import { type NextApiRequest, type NextApiResponse } from 'next';
import dayjs from 'dayjs';
import DashboardLayout from '../dashboard/page';

const prisma = new PrismaClient();
const getData  =async () => {
    const data = await prisma.project.findMany();
    return data
    // res.json({ result: data })
    // console.log
}

const Dashboard = async()  => {
  const project = await getData();
//   console.log(project);
  
  return (
    <DashboardLayout>
      <div>
        <table className='table w-full'>
            <thead>
            <tr>
                <th>Kementerian</th>
                <th>Judul</th>
                <th>Jenis</th>
                <th>HPS</th>
                <th>Akhir Pendaftaran</th>
            </tr>
            </thead>
            <tbody>
            {project.map((lpse, index) => (
              <tr>
                <td>{lpse.owner}</td>
                <td>{lpse.title}</td>
                <td>{lpse.type}</td>
                <td>Rp {Number(lpse.hps).toLocaleString('id-ID')}</td>
                <td>{dayjs(lpse.deadlineAt).format('DD MMMM YYYY')}</td>
            </tr>
            ))}
            </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
export default Dashboard;
