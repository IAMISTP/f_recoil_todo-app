import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../todoAtom'

export default function TodoListStats(){
    const {
        totalNum,
        totalCompletedNum,
        totalUnCompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100) ;
  return (
    <ul>
        <li>Total Items : {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUnCompletedNum}</li>
        <li>Persent completed : {formattedPercentCompleted}</li>
    </ul>
  )
}
