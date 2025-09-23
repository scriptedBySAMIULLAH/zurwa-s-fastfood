import React, { useEffect, useState } from 'react'
import Card from './Card';

function Specials() {
    const [specials, setSpecials] = useState([]);
    useEffect(() => {
            const fetchSpecials = async () => {
                 try {

                const res = await fetch('/data/specialDeals.json');

                const result = await res.json();

                if (result?.Specials)

               {
                 setSpecials(result.Specials);
               }

                 }
            
        catch (error) {
                    console.error(error)
                }

               
            }
             fetchSpecials();
        },[]);
    return (
        <>
            <section className='px-6  w-full max-w-7xl mx-auto mt-1 sm:mt-4 ' id="specials">
                <h1 className='font-PoppinsBold  text-lg   sm:text-2xl border-yellow  w-fit border-b-2  sm:border-b-4'>Specials</h1>

            </section>
             <div className="container mx-auto px-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {
                    specials.map((special)=>(

                      <Card key={special.id}
                      
                      dealsData={special}
                      />
                       
                    ))
                }

            </div>

           </div>

        </>
    )
}

export default Specials