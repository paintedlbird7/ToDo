import React, { useState } from 'react';

export default function AddTodo() {
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <form>
            <div style={{ borderBottomColor: 'black' }}>a form to add my To-do's here
            <input
                //style={styles.input}
                type="text"
                placeholder='add a new todo'
                onChangeText={changeHandler}
            />
            </div>
            </form>

    );
 };
  
//  const styles = StyleSheet.create({
//     input: {
//       marginBottom: 10,
//       paddingHorizontal: 8,
//       paddingVertical: 6,
//       borderBottomWidth: 1,
//       borderBottomColor: '#ddd',
//     },
//   });
