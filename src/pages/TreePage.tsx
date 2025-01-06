import React, { useState, useEffect } from 'react';
import Tree from '../components/Tree';
import { Switch, FormControlLabel, Snackbar, Alert, Button } from '@mui/material';

const initialTree = { //Estructura inicial
  title: 'Raiz del árbol',
  children: [
    { title: 'Hijo 1', children: [] },
    {
      title: 'Hijo 2',
      children: [{ title: 'Nieto 1', children: [] }],
    },
  ],
};

const TreePage: React.FC = () => { //Pagina de arbol
  const [tree, setTree] = useState(() => {
    const savedTree = localStorage.getItem('treeData'); //obtiene datos guardados previamente
    return savedTree ? JSON.parse(savedTree) : initialTree;
  });

  const [editable, setEditable] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const handleTreeChange = (newTree: typeof initialTree, action: string) => { //Maneja cambios del tree
    setTree(newTree);
    localStorage.setItem('treeData', JSON.stringify(newTree));

    setSnackbar({ //Notificacion de accion
      open: true,
      message: action,
      severity: action.includes('eliminado') ? 'error' : 'success',
    });
  };

  const toggleEditable = () => { //Modo edicion
    setEditable(!editable);
  };

  const handleCloseSnackbar = () => { //Cerrar notificacion
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tree</h1>
      <FormControlLabel
        control={<Switch checked={editable} onChange={toggleEditable} />}
        label={editable ? 'Modo Edición' : 'Modo Vista'}
      />
      <Tree
        title={tree.title}
        value={tree}
        onChange={(newTree) => handleTreeChange(newTree, 'Árbol modificado')}
        editable={editable}
      />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity as any}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TreePage;
