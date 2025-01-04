import QuestionsSection from '@/components/QuestionSection/QuestionsSection';
import RecordAnswerSection from '@/components/RecordAnswer/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const StartInterview = () => {
  const {mockId}=useParams();

  const [interviewData,setInterviewData]=useState()
  const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
  const [mockInterviewQuestion,setMockInterviewQuestion]=useState([])

  useEffect(() => {
    console.log(mockId);
    GetInterviewDetails()
}, []);

  const GetInterviewDetails = async () => {
    
    try {
        const response = await axios.get(`http://localhost:5000/api/mockInterview/${mockId}`);
        const jsonMockResp=JSON.parse(response.data.jsonMockResp)
        setMockInterviewQuestion(jsonMockResp);
        console.log(jsonMockResp)
        console.log(jsonMockResp.length)
        setInterviewData(response.data)
    } catch (error) {
        console.error('Error fetching interview details:', error);
    }
};
   
  return (
    <div className="mx-5 md:mx-20 lg:mx-36">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions  */}
        <QuestionsSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        />

        {/* Video/ Audio Recording  */}
        <RecordAnswerSection
         mockInterviewQuestion={mockInterviewQuestion}
         activeQuestionIndex={activeQuestionIndex}
         interviewData={interviewData}
        />
    </div>
    <div className='flex justify-end gap-4'>
      {activeQuestionIndex>0&&  
      <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
      {activeQuestionIndex!=mockInterviewQuestion?.length-1&& 
       <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
      {activeQuestionIndex==mockInterviewQuestion?.length-1&&  
      <Link to={`/dashboard/interview/${mockId}/feedback`}>
      <Button >End Interview</Button>
      </Link>
      }
    </div>
</div>  
)
}

export default StartInterview