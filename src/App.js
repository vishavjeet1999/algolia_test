import { RelatedProducts } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';

const recommendClient = recommend('RHJ7D2F98X', 'd24365333269f7b87040034c4570e85a');
const indexName = 'small_index';



const currentObjectID = 'f23bfc1b1b4ce_dashboard_generated_id'
// (apartment, resident for sale)

// const currentObjectID = 'bf852a7f6f438_dashboard_generated_id'
// (townhouse, resident for sale)




function RelatedItem({ item }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "0px 20px", paddingRight: "20px" }}>
      <div>
        <h3>{item?.name}</h3>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "0px 40px" }}>
          <h4>{item?.['locationObj.full_name']}</h4>
          <h4>|</h4>
          <h4>{item?.offering_type}</h4>
          <h4>|</h4>
          <h4>{item.propertyType}</h4>
          <h4>|</h4>
          <h4>{item['sizeObj.value']} {item['sizeObj.unit']}</h4>
        </div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "0px 40px" }}>
          {item?.amenity_names && JSON.parse(item?.amenity_names)?.map((i,k) => (
            <h5 key={k}>{i}</h5>
          ))
          }
        </div>
        <p style={{ fontSize: 14 }}>{item.description}</p>
        <h4>Price - {item['priceObj.value']} {item['priceObj.currency']}</h4>
      </div>
      <div >
        <img src={item['brokerObj.logo']} />
      </div>
    </div>
  );
}


function App() {
  return (
    <>
    <RelatedProducts
      recommendClient={recommendClient}
      indexName={indexName}
      objectIDs={[currentObjectID]}
      itemComponent={RelatedItem}
    />
    </>
  );
}


export default App