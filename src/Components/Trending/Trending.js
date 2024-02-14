import './Trending.css'

function Trending() {
  const shoesData=[
     
    {
      "id":1,
      "brand":"NIKE",
      "name":"DUNK LOW RETRO PREMIUM DARK SMOKE GREY/BARELY GREEN-WHITE",
      "image": "https://images.vegnonveg.com/resized/700X573/10595/dunk-low-retro-premium-dark-smoke-greybarely-green-white-grey-659f91a81046c.jpg",
      "price": "Rs. 10750.00",
      "category":"men"
    },
    {
      "id":2,
      "brand":"NIKE",
      "name":"AIR MAX 90 LV8 LIGHT IRON ORE/PLATINUM VIOLET-LIGHT PUMICE",
      "image": "https://images.vegnonveg.com/resized/700X573/10584/air-max-90-lv8-light-iron-oreplatinum-violet-light-pumice-purple-65a78a43238d3.jpg",
      "price": "Rs. 12790.00",
      "category":"women"
    },
    {
      "id":3,
      "brand":"NIKE",
      "name":" AIR MAX 90 GORE-TEX SUMMIT WHITE/COOL GREY-BRIGHT CRIMSON",
      "image": "https://images.vegnonveg.com/resized/700X573/10617/air-max-90-gore-tex-summit-whitecool-grey-bright-crimson-multicolor-65a4df5db2c77.jpg",
      "price": "Rs. 14995.00",
      "category":"men"
    },
    {
      "id":4,
      "brand":"NIKE",
      "name":" X HELLO KITTY AIR PRESTO KIDS UNIVERSITY BLUE-WHITE-LIGHT CRIMSON",
      "image": "https://images.vegnonveg.com/resized/700X573/7067/nike-presto-qs-ps-university-blueblack-white-lt-crimson-6279ff9c4a5b2.jpg",
      "price": "Rs. 2798.00",
      "category":"kid"
    },
    {
      "id":5,
      "brand":"JORDAN",
      "name":" AIR JORDAN 1 MID YELLOW OCHRE/BLACK-WHITE",
      "image": "https://images.vegnonveg.com/resized/700X573/10622/air-jordan-1-mid-yellow-ochreblack-white-yellow-65a7bcde5cf73.jpg",
      "price": "Rs. 11,495.00",
      "category":"men"
    },
    {
      "id":6,
      "brand":"NIKE",
      "name":" DUNK LOW RETRO VALERIAN BLUE/VALERIAN BLUE/WHITE",
      "image": "https://images.vegnonveg.com/resized/700X573/7036/dunk-low-retro-valerian-bluevalerian-bluewhite-624fe8f9c7ee1.jpg",
      "price": "Rs. 8,295.00",
      "category":"men"
    },


  ];


  return (
    <>
    <div className='container mt-4'>
      <h1 className='title'>Latest Collection</h1>
      <div className='row'>
      {shoesData.map((product) => ( 
        <div key={product.id} className="col-md-3 mb-4">
          <div className='card'>
            <img className='card-img-top'src={product.image}  alt={product.name}/>
            <div className='card-body'>
              <h5 className='card-brand' style={{ fontWeight:"bold"}} >{product.brand}</h5>
              <p className='card-title'style={{ color:'rgb(63, 60, 60)'}}>{product.name}</p>
              <p className='card-text'style={{ fontWeight:"bold"}}>{product.price}</p>
              </div>
             </div>
            </div>  
      ))}
      </div>
      </div>
      </>
  );
 }

export default Trending;
