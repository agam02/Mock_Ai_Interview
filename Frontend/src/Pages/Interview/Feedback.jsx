import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"

const Feedback = () => {
   const {mockId} = useParams();
   const [feedbackList, setFeedbackList] = useState([]);

   useEffect(() => {
     GetFeedback();
   }, []);
 
   const GetFeedback = async () => {
     try {
       // Call the Express API to fetch feedback
       const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/userAnswer/mockId/${mockId}`
      );
 
       if (response.status === 200) {
         console.log('Feedback List:', response.data);
         setFeedbackList(response.data);
       } else {
         console.error('Failed to fetch feedback');
       }
     } catch (error) {
       console.error('Error fetching feedback:', error);
     }
   };
  return (
    <div className="mx-5 md:mx-20 lg:mx-36">
        <div className='p-10'>
        {feedbackList?.length==0?
        <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>  
          :
        <>
       <h2 className='text-3xl font-bold text-green-500'>Congratulation!</h2>
        <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
       
        {/* <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2> */}
   
        <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
        {feedbackList&&feedbackList.map((item,index)=>(
            <Collapsible key={index} className='mt-7'>
            <CollapsibleTrigger className='p-2
             bg-secondary rounded-lg flex justify-between
            my-2 text-left gap-7 w-full'>
            {item.question} <ChevronsUpDown className='h-5 w-5'/>
            </CollapsibleTrigger>
            <CollapsibleContent>
               <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating : </strong>{item.rating}</h2>
                <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer : </strong>{item.userAns}</h2>
                <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer : </strong>{item.correctAns}</h2>
                <h2 className='p-2 border rounded-lg bg-blue-50 text-sm text-primary'><strong>Feedback : </strong>{item.feedback}</h2>
               
               </div>
            </CollapsibleContent>
            </Collapsible>
        ))}
 
  </>}
        <Link to='/dashboard'>
        <Button>Go Home</Button>
        </Link>
        </div>
    </div>
  )
}

export default Feedback