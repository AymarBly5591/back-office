import React from 'react'
import ImageSider from '../components/ImageSider'
import Videos from '../components/Videos'
import ListArticle from '../components/ListArticle'
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div>
         <Navbar/>
         <ImageSider/>
         <Videos/>
         <ListArticle title={"Catégories"}/>
         <ListArticle title={"récements ajoutés"}/>
         <ListArticle title={"Nouveautés"}/>

    </div>
  )
}

export default Dashboard
