import React, { useState,useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
// import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask1 = new Task("Example 1","Default description 1",false,LEVELS.NORMAL)
    const defaultTask2 = new Task("Example 2","Default description 2",true,LEVELS.URGENT)
    const defaultTask3 = new Task("Example 3","Default description 3",true,LEVELS.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Task State has been modified")
        setLoading(false);
        return () => {
            console.log("Task list component is going to unmount")
        };
    }, [tasks]);

    function completeTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    function tasksTable(){

        if(tasks.length > 0) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/** TODO: Iterar sobre una lista de tareas */}
                        {/* <TaskComponent task={defaultTask}></TaskComponent> */}
                        {
                            tasks.map((task, index) => {
                                return (
                                    <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}></TaskComponent>
                                )
                            })
                        }
                    </tbody>
                </table>
            )
        }else {
            return (
                <h3>There are no tasks to show</h3>
            )
        }
        
    }

    return (
        <div className='col-12 card'>
            <div className='card-header p-3'>
                <h5>Your Task:</h5>
            </div>
            <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relatice', height: '400px'}}>
                {tasksTable()}
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
