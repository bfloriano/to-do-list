import { FlatList, Image, Pressable, TextInput, View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { Progress } from "../../components/Progress";
import { useState } from "react";

type Item = {
    id: number;
    name: string;
    checked: boolean;
}

export function Home () {

    const [taskList, setTaskList] = useState<Item[]>([]) 
    const [newTask, setNewTask] = useState<Item>()
    
    
    function handleTaskAdd() {
        if(!newTask?.name) return Alert.alert("Error", "Enter a valid task")
        
        setTaskList(prevState => [...prevState, newTask])
        setNewTask({name: ''} as  Item)
    }

    function handleTaskRemove(task: Item) {
        Alert.alert("Remover tarefa", `Tem certeza que deseja remover a tarefa ${task.name}?`, [
            {
              text:  "Sim",
              onPress: () => setTaskList(prevState => prevState.filter(taskItem => taskItem.id !== task.id))
            },
            {
              text: "Não",
              style: 'cancel'
            }
          ])
    }

    function handleMarkAsDone(task: Item) {
        setTaskList(prevState => prevState.map(
            item => item.id === task.id ? {...item, checked: !item.checked} : item
        ))
    }

    return (
        <View style={styles.home}>
            <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Adicione uma nova tarefa' 
                    placeholderTextColor="#808080" 
                    onChangeText={text => setNewTask({id: Math.random(), name: text, checked: false})}
                    value={newTask?.name}
                />
                <Pressable 
                    style={styles.buttom}
                    onPress={handleTaskAdd}
                >
                    <Image source={require('../../../assets/plus.png')}/>
                </Pressable>
            </View>
            <View style={styles.bottomHome}>
            <Progress 
                created={taskList.length}
                completed={taskList.filter(item => item.checked).length}    
            />
            <FlatList
                data={taskList.sort( (a, b) => Number(a.checked) - Number(b.checked))}
                keyExtractor={item => item?.id?.toString()}
                renderItem={({ item }) => ( 
                    <Task 
                        key={item.id}
                        text={item.name}
                        checked={item.checked}
                        onRemove={() => handleTaskRemove(item)}
                        onCheck={() => handleMarkAsDone(item)}
        
                     />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyTasksLabel}>
                        <Image source={require('../../../assets/Clipboard.png')}/>
                        <Text style={styles.taskLabelBold}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.taskLabel}>
                            Crie tarefas e organize seus itens a fazer
                        </Text> 
                    </View>
                )}
            />
            </View>
        </View>
    )
}