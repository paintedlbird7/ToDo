import React, { useState } from 'react';

export default function AddTodo({ submitHandler }) { //destructuring submitHandler
    const [text, setText] = useState('');
    
// handle changes when typing
    //   const changeHandler = (e) => {
    //     setText(e.currentTarget.value)
    // }

// handle changes when typing
   const changeHandler = (val) => {
        setText(val)
    }

    return (
        <form>
            <div style={{ borderBottomColor: 'yellow' }}>
            <input
                //style={styles.input}
                type="text"
                placeholder='add a new todo'
                onChangeText={changeHandler}
            />
            <button onClick={() => 
                // submitHandler
                console.log(text)} title='add todo'>Submit</button>
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
