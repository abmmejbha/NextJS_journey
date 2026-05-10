import react from 'react';

export default async function BlogPost({params}) {
    const {id} = await params
    return(
        <main>
            <div className="p-10 bg-blue-100"> 
                 The blog post id is {id} 
            </div>
        </main>
    )
}