import React from 'react'
import Image from 'next/image';
import PowderAboutPage from '@/Components/assets/images/Moringa-Powder.png'

const page = () => {
  return (
    <>

    <div className="flex flex-col mt-32 md:flex-row  ">
    
    <div className="w-full md:w-1/2">
      <div className="p-4">
        <Image src={PowderAboutPage} alt="About Photo" className="rounded-lg w-full hover:scale-105 shadow-md shadow-black duration-700  " />
      </div>
    </div>

    <div className="w-full md:w-1/2">
    <div className="p-4">
        <h1 className="text-2xl font-oswald justify-center md:text-3xl font-bold mb-4">About Us</h1>
        <p className="text-sm font-oswald md:text-base lg:text-lg xl:text-xl">
        Moringa is a highly nutritious plant known for its health benefits. It is packed with vitamins, minerals, and antioxidants that support the immune system, reduce inflammation, aid digestion, promote healthy skin, and provide energy. Moringa can be consumed as leaves, powder, or oil, and it offers a natural and sustainable way to improve overall health and well-being
        </p>
      </div>
    </div>
  </div>
        <div className="p-4 rounded-md text-center justify-center my-32 mx-5 bg-blue-100 ">
            <h1 className="font-bold text-3xl font-oswald text-green-800">Information About Moringa Leaf&Flowers</h1>
            <h1 className="text-left text-green-700 text-2xl">Moringa</h1>
            <p className="font-oswald text-left" >Moringa is a versatile plant known as the Miracle Tree for its exceptional nutritional value and health benefits. It is rich in vitamins, minerals, and antioxidants, offering immune support, anti-inflammatory properties, and potential benefits for digestion, skin health, and more. Moringa leaves, pods, seeds, and flowers are all edible and can be incorporated into various dishes or consumed as a dietary supplement. It is a sustainable and eco-friendly plant with fast growth and adaptability to different environments.
            </p>
            <h1 className="text-left text-green-600 text-2xl mt-6" >Leaf Powder:</h1>
            <p className="font-oswald text-left">
            Moringa powder is a nutrient-dense green powder derived from the leaves of the Moringa tree. It is rich in vitamins, minerals, antioxidants, and protein, offering numerous health benefits. Moringa powder supports immune function, reduces inflammation, boosts energy levels, aids digestion, and promotes healthy skin and hair. It is a convenient and potent supplement that can enhance overall health and well-being.
            </p>
            <h1 className="text-left text-pink-700 text-2xl mt-6" >Flowers:
            </h1>
            <p className="font-oswald text-left" >Moringa flowers are the blossoms of the Moringa tree, known for their delicate beauty and health benefits. These flowers offer various medicinal properties and are rich in antioxidants, vitamins, and minerals. Consuming Moringa flowers or using them in herbal preparations may promote healthy digestion, support the immune system, and provide anti-inflammatory effects. They are a natural and beneficial addition to a holistic approach to wellness..</p>
            <h1 className="text-left text-yellow-700 text-2xl mt-6">
              How to eat moringa powder:
            </h1>
            <p className="font-oswald text-left " >To consume Moringa powder, simply add a teaspoonful to your favorite foods and beverages. Mix it into smoothies, juices, or yogurt for a nutrient-packed boost. Sprinkle it over salads, soups, or stir-fries to enhance their nutritional value. You can also blend it into energy bars or baked goods for an extra health kick. Moringa powder offers a convenient and versatile way to incorporate its benefits into your daily diet.
              </p>
              <h1 className="text-left text-green-700 text-2xl mt-6" >
            How to eat moringa flowers:
              </h1>
              <p className="font-oswald text-left">
                 <mark>Fresh Consumption:</mark> Moringa flowers can be eaten raw, either on their own or added to salads for a touch of color and mild flavor.
    
                <mark>Culinary Uses:</mark> Moringa flowers can be lightly sautéed with other vegetables or added to stir-fries, soups, and curries for a unique taste and visual appeal.

                <mark>Herbal Infusions:</mark> Steep Moringa flowers in hot water to make a soothing and healthful herbal tea. Allow the flowers to infuse for a few minutes before enjoying.

                <mark>Garnish or Decorative Purposes:</mark> Use Moringa flowers as a garnish to add a touch of beauty and elegance to dishes, desserts, or drinks.

                Moringa flowers offer a pleasant taste and can be a delightful addition to various culinary creations while providing potential health benefits.</p>
              
                
        </div>
  </>
  
  )
}

export default page;








