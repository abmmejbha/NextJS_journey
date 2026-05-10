import react from 'react';

export default function BlogPost({params}) {

    return(
        <div className="mt-10"> 
            The blog post id is {params.id} 
        </div>
    )
}