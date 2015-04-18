'use strict';
(function() {
    var language = {
        //random :
        BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
        BLOCKLY_MSG_REMOVE_COMMENT: 'Remover comentário',
        BLOCKLY_MSG_ADD_COMMENT: 'Adicionar comentário',
        BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entradas externas',
        BLOCKLY_MSG_INLINE_INPUTS: 'Entradas em linha',
        BLOCKLY_MSG_DELETE_BLOCK: 'Eliminar bloco',
        BLOCKLY_MSG_DELETE_X_BLOCKS: 'Eliminar %1 blocos',
        BLOCKLY_MSG_COLLAPSE_BLOCK: 'Minimizar bloco',
        BLOCKLY_MSG_EXPAND_BLOCK: 'Expandir bloco',
        BLOCKLY_MSG_DISABLE_BLOCK: 'Desativar bloco',
        BLOCKLY_MSG_ENABLE_BLOCK: 'Ativar bloco',
        BLOCKLY_MSG_HELP: 'Ajuda',
        BLOCKLY_MSG_COLLAPSE_ALL: 'Minimizar blocos',
        BLOCKLY_MSG_EXPAND_ALL: 'Expandir blocos',
        LANG_VARIABLES_SET_ITEM: 'elemento',
        LANG_RESERVED_WORDS: 'Palavra reservada: este nome não é permitido.',
        //logic blocks:
        LANG_CATEGORY_LOGIC: 'Lógica',
        LANG_LOGIC_OPERATION_AND: 'e',
        LANG_LOGIC_OPERATION_OR: 'ou',
        LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara se as duas entradas são iguais.',
        LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara se as duas entradas não são iguais entre sí.',
        LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara se a primera entrada é menor do que a segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara se a primera entrada é menor ou igual à segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara se a primera entrada é maior do que a segunda entrada.',
        LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara se a primera entrada é maior ou igual à segunda entrada.',
        LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara se ambas as entradas são verdadeiras.',
        LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara se alguma das entradas é verdadeira.',
        LANG_LOGIC_NEGATE_INPUT_NOT: 'não',
        LANG_LOGIC_NEGATE_TOOLTIP: 'Devolve o inverso da entrada.',
        LANG_LOGIC_NEGATE_HELPURL: '',
        LANG_LOGIC_BOOLEAN_TRUE: 'verdadeiro',
        LANG_LOGIC_BOOLEAN_FALSE: 'falso',
        LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devolve verdadeiro ou falso em função do seleccionado.',
        //communication blocks:
        LANG_CATEGORY_COMMUNICATION: 'Comunicação',
        LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: receber ',
        LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
        LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devolve os dados recebidos pelo módulo Bluetooth',
        LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
        LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar dados',
        LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Os dados da entrada são enviados usando o módulo Bluetooth',
        LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
        LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baud Rate',
        LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
        LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
        LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
        LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
        LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Receber',
        LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
        LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definicão do módulo Bluetooth',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Porta Série disponível',
        LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Verifica se o módulo Bluetooth está disponível ou não',
        LANG_ADVANCED_SERIAL_AVAILABLE: 'Porta Série disponível',
        LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Verifica se a porta série está disponível ou não',
        LANG_ADVANCED_SERIAL_PRINT: 'Imprimir pela porta série',
        LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime os dados como texto ASCII.',
        LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir pela porta série com salto de linha',
        LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime os dados como texto ASCII e con retorno de carro (RC).',
        LANG_ADVANCED_SERIAL_READ: 'Ler a porta série',
        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lê os dados recebidos pela porta série como bytes.',
        LANG_ADVANCED_SERIAL_READSTRING: 'Ler seqüência a porta série',
        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lê os dados recebidos pela porta série como texto ASCII.',
        LANG_ADVANCED_SERIAL_SPECIAL: 'Caracteres especiais',
        LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
        LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
        LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salto de linha',
        LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escreve caracteres especiais.',
        //bq blocks :
        LANG_CATEGORY_BQ: 'Octopus bloqs',
        LANG_BQ_BAT: 'BAT - Sensor de Ultrasons',
        LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
        LANG_BQ_BAT_TOOLTIP: 'Devolve a distância medida pelo sensor.',
        LANG_BQ_BUTTON: 'Botão',
        LANG_BQ_BUTTON_PIN: 'PIN#',
        LANG_BQ_BUTTON_TOOLTIP: 'Botão',
        LANG_BQ_BUTTONS: 'Botoneira',
        LANG_BQ_BUTTONS_PIN: 'PIN#',
        LANG_BQ_BUTTONS_BUTTON_A: 'Botão #A',
        LANG_BQ_BUTTONS_BUTTON_B: 'Botão #B',
        LANG_BQ_BUTTONS_BUTTON_C: 'Botão #C',
        LANG_BQ_BUTTONS_BUTTON_D: 'Botão #D',
        LANG_BQ_BUTTONS_BUTTON_E: 'Botão #E',
        LANG_BQ_BUTTONS_TOOLTIP: 'Botoneira',
        LANG_BQ_INFRARED: 'Sensor infravermelhos',
        LANG_BQ_INFRARED_PIN: 'PIN#',
        LANG_BQ_INFRARED_TOOLTIP: 'Devolve o valor digital medido pelo sensor infravermelhos',
        LANG_BQ_JOYSTICK: 'Joystick',
        LANG_BQ_JOYSTICK_PIN_X: 'Eixo X PIN#',
        LANG_BQ_JOYSTICK_PIN_Y: 'Eixo Y PIN#',
        LANG_BQ_JOYSTICK_POSITION: 'Posição Joystick',
        LANG_BQ_JOYSTICK_PIN_BUTTON: 'Botão PIN#',
        LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
        LANG_BQ_LED: 'LED',
        LANG_BQ_LED_PIN: 'PIN#',
        LANG_BQ_LED_STATE: '',
        LANG_BQ_LED_ON: 'ACENDER',
        LANG_BQ_LED_OFF: 'APAGAR',
        LANG_BQ_LED_TOOLTIP: 'LED',
        LANG_BQ_PHOTORESISTOR: 'Sensor de Luz',
        LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
        LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Devolve o valor analógico medido pela foto-resistência.',
        LANG_BQ_PIEZO_BUZZER: 'Cigarra',
        LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZER_TONE: 'TOM',
        LANG_BQ_PIEZO_BUZZER_DO: 'DO',
        LANG_BQ_PIEZO_BUZZER_RE: 'RÉ',
        LANG_BQ_PIEZO_BUZZER_MI: 'MI',
        LANG_BQ_PIEZO_BUZZER_FA: 'FA',
        LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
        LANG_BQ_PIEZO_BUZZER_LA: 'LA',
        LANG_BQ_PIEZO_BUZZER_SI: 'SI',
        LANG_BQ_PIEZO_BUZZER_DURATION: 'Duração',
        LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Cigarra - Elemento piezoeléctrico',
        LANG_BQ_PIEZO_BUZZERAV: 'Cigarra avançado',
        LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_BQ_PIEZO_BUZZERAV_TONE: 'TOM',
        LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duração',
        LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Cigarra avançado',
        LANG_BQ_POTENTIOMETER: 'Potenciômetro',
        LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
        LANG_BQ_POTENTIOMETER_TOOLTIP: 'Devolve o valor analógico medido pelo Potenciômetro',
        //LCD blocks:
        LANG_CATEGORY_LCD: 'LCD bloqs',
        LANG_LCD_DEF: 'LCD (2x16)',
        LANG_LCD_PINS: 'Conecta o pino SCL ao pino A5 e o pino SDA ao pino A4',
        LANG_LCD_DEF_TOOLTIP: 'Define o LCD',
        LANG_LCD_ADVANCED_DEF: 'LCD avançado',
        LANG_LCD_ADVANCED_ROWS: 'Linhas',
        LANG_LCD_ADVANCED_COLUMNS: 'Colunas',
        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloco que define o LCD avançado',
        LANG_LCD_SETBACKLIGHT: 'LCD: ajustar a retroiluminação',
        LANG_LCD_SETBACKLIGHT_CLOSE: '',
        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta a retroiluminação do LCD',
        LANG_LCD_PRINT: 'LCD: Imprimir ',
        LANG_LCD_PRINT_POSITION: 'Definir a posição do texto?',
        LANG_LCD_PRINT_TOOLTIP: 'Imprime uma frase no LCD na posição específicada ou na seguinte disponível.',
        LANG_LCD_CLEAR: 'LCD apagar',
        LANG_LCD_CLEAR_TOOLTIP: 'LCD: Apagar',
        //controls blocks :
        LANG_CATEGORY_CONTROLS: 'Controles',
        LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera o tempo especificado em milisegundos (ms)',
        LANG_CONTROLS_IF_TOOLTIP_1: 'Se a condição é verdadeira, executa as ações dentro do bloco.',
        LANG_CONTROLS_IF_TOOLTIP_2: 'Se a condição é verdadeira, executa o primero bloco de comandos. Se não é, executa o segundo bloco de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_3: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos.',
        LANG_CONTROLS_IF_TOOLTIP_4: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos. Se nenhum dos valores é verdadeiro, executa o último bloco de comandos',
        LANG_CONTROLS_IF_MSG_IF: 'se',
        LANG_CONTROLS_IF_MSG_ELSEIF: 'senão, se',
        LANG_CONTROLS_IF_MSG_ELSE: 'senão',
        LANG_CONTROLS_IF_MSG_THEN: 'executar',
        LANG_CONTROLS_IF_IF_Field_IF: 'se',
        LANG_CONTROLS_IF_IF_TOOLTIP: 'Adicionar, eliminar ou reordenar seções para reconfigurar este bloco "se".',
        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'senão, se',
        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Adiciona uma condição ao bloco "se".',
        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'senão',
        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Adiciona uma condição final ao bloco "se" para capturar o resto das opções.',
        LANG_CONTROLS_FOR_FROM_WARNING: 'Não é possível definir uma variável como o valor inicial do bloco.',
        LANG_CONTROLS_FOR_TO_WARNING: 'Não é possível definir uma variável como o valor inicial do bloco.',
        LANG_CONTROLS_FOR_INPUT_WITH: 'Contar com',
        LANG_CONTROLS_FOR_INPUT_VAR: 'x',
        LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
        LANG_CONTROLS_FOR_INPUT_TO: 'até',
        LANG_CONTROLS_FOR_INPUT_DO: 'executar',
        LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde de início até ao final. Cada vez que se incrementa o valor, a variável fica com esse valor e são executadas as ações.',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'enquanto',
        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'até',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Enquanto a condição for verdadeira, executar as instruções.',
        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Enquanto a condição for falsa, executar as instruções.',
        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vezes',
        LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
        LANG_CONTROLS_REPEAT_TOOLTIP: 'executar as instruções um determinado número de vezes.',
        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: '"loop"',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromper',
        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'seguir para o próximo valor do "loop"',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Sair do "loop" nesta instrução.',
        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar o resto das ações desta volta e continuar com para a próxima volta.',
        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenção: Este bloco só pode ser usado dentro de um "loop".',
        LANG_CONTROLS_SWITCH: 'se ',
        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'executa as ações se for este o caso.',
        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'executa as ações se for este o caso.',
        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'executa as ações se for este o caso.',
        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'executa as ações se for este o caso.',
        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloco compara um a um se são cumpridos os diferentes casos.',
        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'O bloco "default" especifica a ação que se vai executar se não forem cumpridos nehum dos casos anteriores.',
        LANG_CONTROLS_SWITCH_IS: 'é: ',
        LANG_CONTROLS_SWITCH_CASE: 'caso ',
        LANG_CONTROLS_SWITCH_COLON: ': ',
        LANG_CONTROLS_SWITCH_DEFAULT: 'noutro caso',
        LANG_CONTROLS_SWITCH_DO: 'executar',
        //math blocks :
        LANG_CATEGORY_MATH: 'Matemáticas',
        LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
        LANG_MATH_ADVANCED_MAP_FROM: 'De [',
        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
        LANG_MATH_ADVANCED_MAP_TO: 'a [',
        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeia a entrada do intervalo de valores iniciais para um intervalo diferente.',
        LANG_MATH_NUMBER_TOOLTIP: 'Número inteiro',
        LANG_MATH_ARRAY_ARRAY3: '[3]',
        LANG_MATH_ARRAY_BRACKET3: '{',
        LANG_MATH_ARRAY_BRACKET4: '}',
        LANG_MATH_ARRAY_COMMA: ',',
        LANG_MATH_ARRAY_TOOLTIP: 'Vector de três inteiros',
        LANG_ARRAY_GET_BRACKET1: '[',
        LANG_ARRAY_GET_BRACKET2: ']',
        LANG_ARRAY_GET_TOOLTIP: 'Devolve o valor de um elemento determinado do vetor.',
        LANG_MATH_MODULO_TOOLTIP: 'Devolve o resto da divisão entre os valores das entradas.',
        LANG_MATH_BASE_MAP: 'Mapear ',
        LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
        LANG_MATH_BASE_MAP_BRACKET: ']',
        LANG_MATH_BASE_MAP_TOOLTIP: 'Mapeia o intervalo de valores da entrada [0-1023] a outro intervalo de valores.',
        LANG_MATH_SINGLE_OP_ROOT: 'raíz quadrada',
        LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devolve a raíz quadrada de um número.',
        LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devolve o valor absoluto de um número.',
        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devolve a negação do sinal de um número.',
        LANG_MATH_SINGLE_TOOLTIP_LN: 'Devolve o logaritmo de um número.',
        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devolve o logaritmo de base 10 de um número.',
        LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devolve o exponencial de um número.',
        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devolve 10 elevado a uma potência.',
        //text blocks:
        LANG_CATEGORY_TEXT: 'Texto',
        LANG_TEXT_TEXT_HELPURL: '',
        LANG_TEXT_TEXT_TOOLTIP: 'Uma letra, uma palabra ou uma linha de texto.',
        LANG_TEXT_JOIN_HELPURL: '',
        LANG_TEXT_JOIN_Field_CREATEWITH: 'criar texto com',
        LANG_TEXT_JOIN_TOOLTIP: 'Cria texto juntando qualquer número de elementos.',
        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Adicionar, eliminar ou reordenar seções para reconfigurar este bloco de texto.',
        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Adicionar um elemento ao texto.',
        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
        LANG_TEXT_APPEND_HELPURL: '',
        LANG_TEXT_APPEND_TO: 'para',
        LANG_TEXT_APPEND_APPENDTEXT: 'acrescentando texto',
        LANG_TEXT_APPEND_VARIABLE: 'elemento',
        LANG_TEXT_APPEND_TOOLTIP: 'Adicionar texto a variável e %1.',
        LANG_TEXT_LENGTH_HELPURL: '',
        LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitude',
        LANG_TEXT_LENGTH_TOOLTIP: 'Devolve o número de letras (incluindo os espaços) no texto introduzido.',
        LANG_TEXT_EQUALSIGNORECASE_IS: '',
        LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara se os dois textos introduzidos são iguais, independentemente de que tenham letras maiúsculas ou minúsculas.',
        LANG_TEXT_SUBSTRING: 'Recortar ',
        LANG_TEXT_SUBSTRING_FROM: 'de',
        LANG_TEXT_SUBSTRING_TO: 'até',
        LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta os caracteres do texto introduzido que se encontrem entre os dois índices e cria com eles um novo texto.',
        //advanced blocks :
        LANG_CATEGORY_ADVANCED: 'Funções PIN',
        LANG_ADVANCED_CONVERSION_CONVERT: 'Converter',
        LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
        LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
        LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
        LANG_ADVANCED_CONVERSION_BINARY: 'Binário',
        LANG_ADVANCED_CONVERSION_VALUE: 'valor',
        LANG_ADVANCED_CONVERSION_TOOLTIP: 'Converter a base de um número.',
        LANG_ADVANCED_INOUT_ANALOG_READ: 'Ler o pino analógico PIN#',
        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lê o valor de um pino analógico específico.',
        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escrever no pino analógico PIN#',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escreve um valor entre 0 e 255 num pino analógico específico.',
        LANG_ADVANCED_BUILTIN_LED: 'LED DA PLACA',
        LANG_ADVANCED_BUILTIN_LED_STATE: 'Estado',
        LANG_ADVANCED_BUILTIN_LED_ON: 'ACESO',
        LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado na placa e que está internamente conectado ao pino 13.',
        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Ler o pino digital PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lê o valor de um pino digital específico.',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escrever no pino digital',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'Estado',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIXO',
        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escreve um valor num pino digital específico.',
        LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
        LANG_ADVANCED_HIGHLOW_LOW: 'BAIXO',
        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escreve "ALTO" ou "BAIXO" em função do selecionado.',
        LANG_ADVANCED_MATH_RANDOM: 'Aleatório entre',
        LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Cria um número aleatório entre os dois limites introduzidos.',
        //procedures blocks
        LANG_CATEGORY_PROCEDURES: 'Funções',
        LANG_PROCEDURES_RETURN: 'devolver',
        LANG_PROCEDURES_RETURN_TOOLTIP: 'Devolve um valor',
        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Chamada de uma função não definida.',
        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'função sem retorno',
        LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'função que se executa sem devolver nada.',
        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'função com retorno',
        LANG_PROCEDURES_DEFRETURN_DO: 'executar',
        LANG_PROCEDURES_DEFRETURN_RETURN: 'Devolve',
        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'função com valor de retorno.',
        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenção: Esta função tem parâmetros duplicados.',
        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
        LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: ' função sem retorno',
        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'executa esta função.',
        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
        LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
        LANG_PROCEDURES_CALLRETURN_PROCEDURE: ' função com retorno',
        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'executa esta função que tem valor de retorno.',
        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parâmetros',
        LANG_PROCEDURES_MUTATORARG_Field: 'variável:',
        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Destaca a função',
        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se a condição é verdadeira, a função devolverá este valor.',
        LANG_PROCEDURES_IFRETURN_WARNING: 'Atenção: Este bloco só pode ser usado dentro de uma função que tenha valor de retorno.',
        //variables blocks :
        LANG_CATEGORY_VARIABLES: 'Variáveis',
        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variável não está declarada.',
        LANG_VARIABLES_GLOBAL: 'Variável',
        LANG_VARIABLES_GLOBAL_TYPE: 'do tipo ',
        LANG_VARIABLES_GLOBAL_EQUALS: '=',
        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara e define uma variável GLOBAL do tipo inteiro (int) ou texto (String).',
        LANG_VARIABLES_LOCAL: 'Variável LOCAL',
        LANG_VARIABLES_LOCAL_TYPE: 'do tipo ',
        LANG_VARIABLES_LOCAL_EQUALS: '=',
        LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara e define uma variável LOCAL do tipo inteiro (int) ou texto (String).',
        LANG_VARIABLES_DEFINE: 'Definir variável ',
        LANG_VARIABLES_DEFINE_AS: 'como',
        LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir o valor de uma variável.',
        LANG_VARIABLES_SET: 'Var',
        LANG_VARIABLES_SET_AS: '=',
        LANG_VARIABLES_SET_TOOLTIP: 'Troca o valor de uma variável.',
        LANG_VARIABLES_GET: 'Var',
        LANG_VARIABLES_GET_TOOLTIP: 'Devolve o valor de uma variável',
        LANG_VARIABLES_PIN_ANALOG: 'Pino analógico',
        LANG_VARIABLES_PIN_DIGITAL: 'Pino digital',
        LANG_VARIABLES_PIN_DIGITAL0: 'AVISO: o pin digital 0 (pin RX) é utilizado ao carregar um esboço. Utilizá-lo para ligar componentes eletrônicos pode causar problemas ao carregar um novo esboço.',
        LANG_VARIABLES_PIN_TOOLTIP: 'Seleciona o pino desejado.',
        //zum blocks :
        LANG_CATEGORY_ZUM: 'Zum bloqs',
        LANG_ZUM_BUTTON: 'Botão',
        LANG_ZUM_BUTTON_PIN: 'PIN#',
        LANG_ZUM_BUTTON_TOOLTIP: 'Botão zum',
        LANG_ZUM_FOLLOWER: 'Sensor infravermelho',
        LANG_ZUM_FOLLOWER_PIN_LEFT: 'PINO ESQUERDA#',
        LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PINO DIREITA#',
        LANG_ZUM_FOLLOWER_LEFT: 'Esquerda',
        LANG_ZUM_FOLLOWER_RIGHT: 'Direita',
        LANG_ZUM_FOLLOWER_TOOLTIP: 'Devolve o valor digital do sensor infravermelho zum',
        LANG_ZUM_INFRARED: 'Sensor infravermelho',
        LANG_ZUM_INFRARED_PIN: 'PIN#',
        LANG_ZUM_INFRARED_TOOLTIP: 'Devolve o valor digital do sensor infravermelho zum',
        LANG_ZUM_LED: 'LED',
        LANG_ZUM_LED_PIN: 'PIN#',
        LANG_ZUM_LED_ON: 'ACENDER',
        LANG_ZUM_LED_OFF: 'APAGAR',
        LANG_ZUM_LED_TOOLTIP: 'LED zum',
        LANG_ZUM_PHOTORESISTOR: 'Sensor de Luz',
        LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
        LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Devolve o valor analógico do sensor de luz (foto-resistência).',
        LANG_ZUM_PIEZO_BUZZER: 'Cigarra',
        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZER_TONE: 'TOM',
        LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
        LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
        LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
        LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
        LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
        LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
        LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duração',
        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Cigarra',
        LANG_ZUM_PIEZO_BUZZERAV: 'Cigarra avançado',
        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TOM',
        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duração',
        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Cigarra - Elemento piezoelétrico avançado.',
        LANG_ZUM_POTENTIOMETER: 'Potenciômetro',
        LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
        LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciômetro zum.',
        //servo blocks :
        LANG_CATEGORY_SERVO: 'Servo',
        LANG_SERVO_CONT: 'Servo de rotação contínua',
        LANG_SERVO_CONT_PIN: 'PIN#',
        LANG_SERVO_CONT_ROT: 'ROT',
        LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR no SENTIDO HORÁRIO',
        LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR no SENTIDO ANTI-HORÁRIO',
        LANG_SERVO_CONT_STOPPED: 'PARAR',
        LANG_SERVO_CONT_DELAY: 'Pausa',
        LANG_SERVO_CONT_TOOLTIP: 'Servo de rotação contínua.',
        LANG_SERVO_MOVE: 'Servo',
        LANG_SERVO_MOVE_PIN: 'PIN#',
        LANG_SERVO_MOVE_DEGREES: 'Graus (0~180)',
        LANG_SERVO_MOVE_DELAY: 'Pausa',
        LANG_SERVO_MOVE_TOOLTIP: 'Mover o servo entre 0 e 180 graus.',
        LANG_SERVO_WARNING: 'Não é possível definir o pin servo utilizando uma variável.'
    };
    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
    //     this.RoboBlocks.locales.add('es', language);
    if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
        RoboBlocks.locales.add('pt-BR', language);
    }
}());