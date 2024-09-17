import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail.jsx'
import { exerecisesOptions, fetchData } from '../utils/fetchData.js'


const ExerecisesDetail = () => {

  const [exerciseVideos, setExerciseVideos] =useState([])
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerecisesOptions)
      setExerciseDetail(exerciseDetailData);
    }

    fetchExerciseData();
  }, [id]) 
 
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
    </Box>
  )
}

export default ExerecisesDetail