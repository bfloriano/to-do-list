import { FlatList, Image, Pressable, TextInput, View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";

export function Home () {

    const [taskList, setTaskList] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    
    function handleTaskAdd() {
        setTaskList(prevState => [...prevState, newTask])
        setNewTask('')
    }

    function handleTaskRemove(task: string) {
        Alert.alert("Remover tarefa", `Tem certeza que deseja remover a tarefa ${task}?`, [
            {
              text:  "Sim",
              onPress: () => setTaskList(prevState => prevState.filter(taskName => taskName !== task))
            },
            {
              text: "Não",
              style: 'cancel'
            }
          ])
    }

    return (
        <View style={styles.home}>
            <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
            <View style={styles.containerInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Adicione uma nova tarefa' 
                    placeholderTextColor="#808080" 
                    onChangeText={text =>  setNewTask(text)}
                    value={newTask}
                />
                <Pressable 
                    style={styles.buttom}
                    onPress={handleTaskAdd}
                >
                    <Image source={require('../../../assets/plus.png')}/>
                </Pressable>
            </View>
            <View style={styles.bottomHome}>
            <FlatList
                style={styles.taskList}
                data={taskList}
                keyExtractor={item => item}
                renderItem={({ item }) => ( 
                    <Task 
                        key={item}
                        text={item}
                        onRemove={() => handleTaskRemove(item)}
        
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