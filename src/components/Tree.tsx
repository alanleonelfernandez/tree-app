import React, { useState } from 'react';
import { IconButton, Button, Typography, Collapse, Paper } from '@mui/material';
import { ExpandMore, ExpandLess, Delete, AddCircle } from '@mui/icons-material';

//Define la estructura del nodo del árbol
interface TreeNode {
  title: string;
  children?: TreeNode[];
}

//Define las props del componente Tree
interface TreeProps {
  title: string; //Titulo del árbol
  value: TreeNode; //Datos iniciales del árbol
  onChange: (newTree: TreeNode) => void; //Cambios
  editable: boolean; //Indica si está en modo edición o solo vista
}

//Subcomponente TreeNode para manejar nodos individuales
interface TreeNodeProps {
  node: TreeNode; //Nodo actual
  editable: boolean; //Indica si se pueden editar
  onAddChild: (node: TreeNode) => void; //Agregar hijos
  onDeleteNode: (node: TreeNode) => void; //Eliminar nodo
  collapsedAll: boolean; //Estado global de colapso
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, editable, onAddChild, onDeleteNode, collapsedAll }) => {
  const [collapsed, setCollapsed] = useState(collapsedAll);

  React.useEffect(() => {
    setCollapsed(collapsedAll);
  }, [collapsedAll]);

  const toggleCollapse = () => { //Funcion para colapsar/descolapsar
    setCollapsed(!collapsed);
  };

  return ( //Render de nodo
    <li style={{ marginBottom: '10px' }}>
      <Paper elevation={2} style={{ padding: '10px', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
        {node.children && node.children.length > 0 && (
          <IconButton size="small" onClick={toggleCollapse} color="primary">
            {collapsed ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        )}
        <Typography variant="h6" style={{ flex: 1 }}>
          {node.title}
        </Typography>
        {editable && (
          <div>
            <IconButton color="primary" onClick={() => onAddChild(node)} aria-label="Agregar hijo">
              <AddCircle />
            </IconButton>
            <IconButton color="error" onClick={() => onDeleteNode(node)} aria-label="Eliminar">
              <Delete />
            </IconButton>
          </div>
        )}
      </Paper>

      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {node.children && (
          <ul>
            {node.children.map((child) => (
              <TreeNode
                key={child.title}
                node={child}
                editable={editable}
                onAddChild={onAddChild}
                onDeleteNode={onDeleteNode}
                collapsedAll={collapsedAll}
              />
            ))}
          </ul>
        )}
      </Collapse>
    </li>
  );
};

//Componente principal del arbol
const Tree: React.FC<TreeProps> = ({ title, value, onChange, editable }) => {
  const [collapsedAll, setCollapsedAll] = useState(false);
  const [tree, setTree] = useState<TreeNode>(value);

  const handleAddChild = (parentNode: TreeNode) => { //Agrega un hijo
    const childTitle = prompt('Ingrese el título del nuevo hijo:');
    if (!childTitle) return;

    const newChild: TreeNode = { title: childTitle, children: [] };

    const addNode = (node: TreeNode): TreeNode => { //Agregar nodo
      if (node === parentNode) {
        return { ...node, children: [...(node.children || []), newChild] };
      }
      return {
        ...node,
        children: node.children?.map(addNode) || [],
      };
    };

    const updatedTree = addNode(tree);
    setTree(updatedTree);
    onChange(updatedTree);
  };

  const handleDeleteNode = (nodeToDelete: TreeNode) => { //Eliminar nodo
    const deleteNode = (node: TreeNode): TreeNode | null => {
      if (node === nodeToDelete) return null;

      return {
        ...node,
        children: node.children
          ?.map(deleteNode)
          .filter((child) => child !== null) as TreeNode[],
      };
    };

    const updatedTree = deleteNode(tree) as TreeNode;
    setTree(updatedTree);
    onChange(updatedTree);
  };

  const toggleCollapseAll = () => { //colapsar/desplegar todo
    setCollapsedAll(!collapsedAll);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        {title}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleCollapseAll}
        style={{ marginBottom: '20px' }}
      >
        {collapsedAll ? 'Desplegar Todo' : 'Colapsar Todo'}
      </Button>
      <ul>
        <TreeNode
          node={tree}
          editable={editable}
          onAddChild={handleAddChild}
          onDeleteNode={handleDeleteNode}
          collapsedAll={collapsedAll}
        />
      </ul>
    </div>
  );
};

export default Tree;
