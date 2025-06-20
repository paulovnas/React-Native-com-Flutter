# 🚀 App Híbrido - React Native + Flutter Integration

Um projeto de demonstração da integração entre **React Native** e **Flutter**, permitindo navegar entre telas criadas em diferentes frameworks dentro do mesmo aplicativo.

## 📱 Sobre o Projeto

Este projeto demonstra como integrar um módulo Flutter dentro de um aplicativo React Native, criando uma experiência híbrida onde:

- **Tela principal**: Desenvolvida em React Native
- **Tela secundária**: Desenvolvida em Flutter
- **Navegação**: Entre os dois frameworks de forma nativa

## 🏗️ Estrutura do Projeto

```
flutter-module-poc/
├── react_native_app/          # Aplicativo principal React Native
│   ├── android/                # Configurações Android
│   ├── App.tsx                # Tela principal
│   └── package.json           # Dependências React Native
├── flutter_module/            # Módulo Flutter integrado
│   ├── lib/main.dart          # Tela Flutter
│   ├── pubspec.yaml           # Dependências Flutter
│   └── .android/              # Build outputs para integração
└── README.md                  # Este arquivo
```

## 🛠️ Pré-requisitos

### Ambiente de Desenvolvimento

- **Node.js** (v16 ou superior)
- **Flutter SDK** (v3.0 ou superior)
- **Android Studio** com SDK
- **JDK 11** ou superior
- **Dispositivo Android** ou emulador

### Verificação do Ambiente

```bash
# Verificar React Native
npx react-native doctor

# Verificar Flutter
flutter doctor

# Verificar dispositivos disponíveis
flutter devices
```

## 📦 Instalação

### 1. Clone o Repositório

```bash
git clone <url-do-repositorio>
cd flutter-module-poc
```

### 2. Configurar React Native

```bash
cd react_native_app
npm install
```

### 3. Configurar Flutter Module

```bash
cd ../flutter_module
flutter pub get
```

### 4. Configurar Android SDK

Crie o arquivo `react_native_app/android/local.properties`:

```properties
sdk.dir=/caminho/para/seu/android/sdk
```

**Exemplo macOS:**
```properties
sdk.dir=/Users/SEU_USUARIO/Library/Android/sdk
```

**Exemplo Windows:**
```properties
sdk.dir=C\\Users\\SEU_USUARIO\\AppData\\Local\\Android\\Sdk
```

## 🔨 Build e Execução

### Desenvolvimento (Debug)

#### 1. Build do Flutter Module
```bash
cd flutter_module
flutter build aar --debug --no-profile --no-release
```

#### 2. Executar no Dispositivo
```bash
cd ../react_native_app

# Para dispositivo específico
npx react-native run-android --device SEU_DEVICE_ID

# Para emulador/primeiro dispositivo disponível
npx react-native run-android
```

### Produção (Release)

#### 1. Build Flutter para Release
```bash
cd flutter_module
flutter build aar --release --no-debug --no-profile
```

#### 2. Build React Native para Release
```bash
cd ../react_native_app
npx react-native run-android --mode=release --device SEU_DEVICE_ID
```

## 📋 Comandos Úteis

### Verificar Dispositivos Conectados
```bash
flutter devices
# ou
adb devices
```

### Limpar Cache (em caso de problemas)
```bash
# React Native
cd react_native_app
npx react-native start --reset-cache

# Flutter
cd ../flutter_module
flutter clean
flutter pub get
```

### Rebuild Completo
```bash
# Flutter
cd flutter_module
flutter clean
flutter pub get
flutter build aar --debug --no-profile --no-release

# React Native
cd ../react_native_app
cd android && ./gradlew clean && cd ..
npx react-native run-android --device SEU_DEVICE_ID
```

## 🎯 Funcionalidades

### 🚀 React Native (Tela Principal)
- Interface moderna com gradientes
- Botão para navegação ao Flutter
- Design responsivo
- Ícone personalizado do app

### 💙 Flutter (Tela Integrada)
- Design com Material Design
- Animações e gradientes
- Botão de retorno funcional
- Interface explicativa da integração

## 🔧 Solução de Problemas

### Build Falha - SDK não encontrado
```bash
# Verificar se ANDROID_HOME está configurado
echo $ANDROID_HOME

# Configurar se necessário (macOS/Linux)
export ANDROID_HOME=/caminho/para/android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

### Erro "Flutter module not found"
```bash
# Rebuild do Flutter AAR
cd flutter_module
flutter clean
flutter build aar --debug --no-profile --no-release
```

### Tela Preta no Flutter
- Certifique-se de que o Flutter Module foi buildado
- Verifique se as dependências estão corretas no `build.gradle`

### Botão Voltar não Funciona
- O código já inclui fallback com `SystemNavigator.pop()`
- Use o botão back nativo do Android como alternativa

## 📚 Arquitetura da Integração

### Como Funciona

1. **Flutter Module** é compilado como um **Android Archive (AAR)**
2. **React Native** inclui este AAR como dependência
3. **Módulo Nativo** (Kotlin) faz a ponte entre React Native e Flutter
4. **FlutterActivity** é chamada quando o usuário toca no botão

### Arquivos Principais

- `FlutterModule.kt` - Bridge nativo
- `AndroidManifest.xml` - Declaração da FlutterActivity
- `build.gradle` - Configuração das dependências
- `main.dart` - Interface Flutter

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).