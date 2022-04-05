import React from 'react';

const Blogs = () => {
    return (
        <div className="m-20">
            <div className="border rounded p-5 m-4">
              <h2 className="text-2xl text-bold m-2">What is Context API?</h2>
               <p className="text-xl text-semibold m-2">Context api is component Structure. Its allow to share data across the application. Basically context api is to solve the problem of prop drilling.</p>
            </div>

            <div className="border rounded p-5 m-4">
              <h2 className="text-2xl text-bold m-2">What is symantic tag?</h2>
              <p className="text-xl text-semibold m-2"> basically symantic tags are which is clearly describe.Its purpose and its content.Symantic tag you can easilt understand its name let you know what type of content take place in it. Such as Header,img,table article,form nav etc.</p>

            </div>

            <div className="border rounded p-5 m-4">
                 <h2 className="text-2xl text-bold m-2">Block element vs inline block element?</h2>
                 <p className="text-xl text-semibold m-2">Thoes element create newline we called block element.A block element takes the full-width of the content. Eamples:p,li,div,ul etc.

                Otherhand inline block element work similer to inline element. You can set heigth and width as you want.So inline block element can be modified.
                </p>
            </div>
           
        </div>


    );
};

export default Blogs;