/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');

  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [
	sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Classname', new mxGeometry(0, 0, 160, 90),
	'swimlane;html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;swimlaneFillColor=#ffffff;fillColor=#ffbe0b;componentName=class;'
      );
      cell.vertex = true;
      cell.insert(attributeField.clone());
      cell.insert(divider.clone());
      cell.insert(methodField.clone());

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class');
    }),
    sb.addEntry(dt + 'item member method function variable field attribute label', function () {
      return sb.createVertexTemplateFromCells([sb.cloneCell(field, '+ item: attribute')], field.geometry.width, field.geometry.height, 'Item 1');
    }),
    sb.addEntry(dt + 'divider hline line separator', function () {
      return sb.createVertexTemplateFromCells([divider.clone()], divider.geometry.width, divider.geometry.height, 'Divider');
    }),

    // sb.addEntry(dt + 'recursive relationship chen', function(){
    //   return sb.createEdgeTemplateFromCells(
    //     [('shape=link;html=1;rounded=0;', null, '1')],
    //     160, 0, 'Recursive Relationship (0:1)');
    // }),

    


    sb.createVertexTemplateEntry(
      'text;html=1;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;',
      80, 26, 'Title', 'Title', null, null, dt + 'title label'
    ),

	sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '<i>&lt;&lt;Interface&gt;&gt;</i><br/> Interface', new mxGeometry(0, 0, 190, 90),	'swimlane;html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=40;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;swimlaneFillColor=#ffffff;fillColor=#ffbe0b;componentName=interface;'
      );
      cell.vertex = true;
      cell.insert(attributeField.clone());
      cell.insert(divider.clone());
      cell.insert(methodField.clone());

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Interface');
    }),
    

    sb.addEntry("uml relacion 0...1",function(){
      var edge = new mxCell('1', new mxGeometry(0,0,0,0),
      'endArrow=none;html=1;rounded=0;dashed=0;dashPattern=1;endSize=12;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;align=right;verticalAlign=bottom;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
      edge.geometry.relative = true;
      edge.geometry.x = 1;
      edge.geometry.y = 3;
      edge.edge = true;
      return sb.createEdgeTemplateFromCells([edge],160,0,"Relacion (0:1)");
  }),

  sb.addEntry("uml relacion 1....1", function() {
    var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;html=1;rounded=0;dashed=0;dashPattern=1;endSize=12;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;');
    
    var labelLeft = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=label;html=1;verticalLabelPosition=middle;align=left;verticalAlign=middle;');
    labelLeft.vertex = true;
    labelLeft.value = '1';
    
    labelLeft.geometry.x = -1; // Ajusta este valor para mover el número a la izquierda
    labelLeft.geometry.y = 10;
    

    var labelRight = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=label;html=1;verticalLabelPosition=middle;align=right;verticalAlign=middle;');
    labelRight.vertex = true;
    labelRight.value = '1';
   
    labelRight.geometry.x = 1// Ajusta este valor para mover el número a la derecha
    labelRight.geometry.y = 10;
    
    edge.insert(labelLeft);
    edge.insert(labelRight);
    
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
    edge.geometry.relative = true;
    labelRight.geometry.relative=true;
    labelLeft.geometry.relative=true;

    edge.edge = true;
    
    return sb.createEdgeTemplateFromCells([edge], 160, 0, "Relación (1:1)");
  }),


  sb.addEntry("uml relacion 1....1", function() {
    var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;html=1;rounded=0;dashed=0;dashPattern=1;endSize=12;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;');
    
    var labelLeft = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=label;html=1;verticalLabelPosition=middle;align=left;verticalAlign=middle;');
    labelLeft.vertex = true;
    labelLeft.value = 'N';
    
    labelLeft.geometry.x = -1; // Ajusta este valor para mover el número a la izquierda
    labelLeft.geometry.y = 10;
    

    var labelRight = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=label;html=1;verticalLabelPosition=middle;align=right;verticalAlign=middle;');
    labelRight.vertex = true;
    labelRight.value = 'M';
   
    labelRight.geometry.x = 1// Ajusta este valor para mover el número a la derecha
    labelRight.geometry.y = 10;
    
    edge.insert(labelLeft);
    edge.insert(labelRight);
    
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
    edge.geometry.relative = true;
    labelRight.geometry.relative=true;
    labelLeft.geometry.relative=true;

    edge.edge = true;
    
    return sb.createEdgeTemplateFromCells([edge], 160, 0, "Relación muchos a muchos");
  }),
  
  sb.addEntry("uml relacion 1....N", function() {
    var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=none;html=1;rounded=0;dashed=0;dashPattern=1;endSize=12;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;');
    
    var labelLeft = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=label;html=1;verticalLabelPosition=middle;align=left;verticalAlign=middle;');
    labelLeft.vertex = true;
    labelLeft.value = '1';
    
    labelLeft.geometry.x = -1; // Ajusta este valor para mover el número a la izquierda
    labelLeft.geometry.y = 10;
    

    var labelRight = new mxCell('', new mxGeometry(0, 0, 0, 0), 'shape=label;html=1;verticalLabelPosition=middle;align=right;verticalAlign=middle;');
    labelRight.vertex = true;
    labelRight.value = 'N';
   
    labelRight.geometry.x = 1// Ajusta este valor para mover el número a la derecha
    labelRight.geometry.y = 10;
    
    edge.insert(labelLeft);
    edge.insert(labelRight);
    
    edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
    edge.geometry.relative = true;
    labelRight.geometry.relative=true;
    labelLeft.geometry.relative=true;

    edge.edge = true;
    
    return sb.createEdgeTemplateFromCells([edge], 160, 0, "Relación de uno a muchos");
  }),
  


    sb.addEntry('uml aggregation', function () {
      var edge = new mxCell('1', new mxGeometry(0, 0, 0, 0), 'endArrow=open;html=1;endSize=12;startArrow=diamondThin;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=bottom;dashed=0;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.geometry.y = 3;
      edge.edge = true;

      
      return sb.createEdgeTemplateFromCells([edge], 160, 0, 'Aggregation');
    }),
    // sb.addEntry('uml Participation relation', function(){
    //   var edge = new mxCell('', new mxGeometry(0,0,0,0),
    //   'endArrow=none;html=1;rounded=0;');
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //   edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
    //   edge.geometry.relative = true;
    //   edge.geometry.x = -1;
    //   edge.geometry.y = 3;
    //   edge.edge = true;

      
    //   return sb.createEdgeTemplateFromCells([edge],160,0,"Mandatory Participation (0:1)");
    // }),

    sb.addEntry('uml composition', function () {
      var edge = new mxCell('1', new mxGeometry(0, 0, 0, 0), 'endArrow=open;html=1;endSize=12;startArrow=diamondThin;startSize=14;startFill=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=bottom;dashed=0;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(160, 0), false);
      
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.geometry.y = 3;
      
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 160, 0, 'Composition');
    }),
    sb.createEdgeTemplateEntry('endArrow=block;endSize=16;endFill=0;html=1;componentName=generalization;', 160, 0, 'Extends', 'Generalization', null, 'uml generalization extend'),
    
  
  ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
};

module.exports = addClassDiagramPalette;