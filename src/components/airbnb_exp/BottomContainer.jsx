import Bottom from './Bottom';
import Data from '../../assets/data/Models';

export default function BottomContainer() {

  let newData = Data.map((bit) => {

    return <Bottom

      key={bit.id}
      {...bit}

    />

  })


  return (
    <div className="bottom-container">
      {newData}      
    </div>
  )
}


/*           <Bottom 
          image="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/40750119-3451-4888-bb97-8ccf6234ff7d/width=450/00079-2820331095.jpeg"
          soldout={true}
          country="KOREA"
          review={4}
          reviewCount={5}
          descr="Terrible. But the girl was cute, and blowjob was great. The service was mediocre."
          price={80}
        />
      <Bottom 
          image="https://lthumb.lisimg.com/975/906975.jpg?width=280&sharpen=true"
          soldout={false}
          country="JAPAN"
          review={8}
          reviewCount={30}
          descr="Awesome! She really does the best job at caressing your nipples."
          price={50}
        />
      <Bottom 
          image="https://superstarsbio.com/wp-content/uploads/2018/12/Emma-Watson-Wallpapers-HD-05.jpg"
          soldout={true}
          country="USA"
          review={2}
          reviewCount={120}
          descr="Kinda rough for me, but worth the money."
          price={200}
        /> */