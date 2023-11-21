import Girls from '../../assets/data/Girls';
import Card from '../produce101/Card';
import React from 'react';



export default function Main() {

  const [girls, setGirls] = React.useState(Girls)

  function GetRid(id) {

    setGirls(prevGirls => {
        
      return prevGirls.map((girl) => {
      
        return girl.id !== id ? {...girl} : null;
                  
      })
              
    })    

  }
  

  const girlData = girls.map((girl) => {
    return (
      <Card 
        
        key = {girl.id}
        id = {girl.id}
        GetRid={GetRid}
        name_jap = {girl.name_jap}
        name_eng = {girl.name_eng}
        image = {girl.image}
        self_intro_vid = {girl.self_intro_vid}
        focus_vid = {girl.focus_vid}
        desc = {girl.desc}

        /* id: 1,
        name_jap: '荒牧深愛',
        name_eng: 'ARAMAKI JOA',
        image: 'https://produce101.jp/static/produce101s3/download/Fv4BWpHPcDWMaUvvNw/thumbnail/005_aramakijoa_2.jpg',
        self_intro_vid: '_w0HM5MPdhY',
        focus_vid: 'm7dL5KhDfes',
        desc: 'ダンス、阿波踊り', */

      />
    )
  })
  
  return (
    <div className="main-container">
      {girlData}
    </div>
  )

}

