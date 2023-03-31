# React Native SymbolKit Icons

![NPM Version](https://img.shields.io/npm/v/symbolkit-react-native?style=flat-square)
![NPM Monthly Downloads](https://img.shields.io/npm/dm/symbolkit-react-native?style=flat-square)
![NPM License](https://img.shields.io/npm/l/symbolkit-react-native?style=flat-square)

SymbolKit, an open-source iconography library consisting of 1,300+ SVG icons.

`symbolkit-react-native` is an open source package that exports these icons as React Native components (`react-native-svg`) that can be used in all of your React Native projects.

## Installation

```
yarn add symbolkit-react-native react-native-svg
```
or
```
npm i symbolkit-react-native react-native-svg
```

## Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import { SymbolKit } from 'symbolkit-react-native';

const App = () => {
  return (
    <View>
      <SymbolKit />
    </View>
  );
};

export default App;
```

Icons can take any `react-native-svg` properties as optional props, e.g.
```javascript
<SymbolKit color="red" height={36} width={36} />
```
Default values for the most common props are given below:

| Prop name   | Default value  |
|-------------|----------------|
| color       | "currentColor" |
| width       | "1.5em"        |
| height      | "1.5em"        |
| strokeWidth | 1.5            |
| fill        | "none"         |

## SymbolKitProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use SymbolKitProvider to set the default icon props for everything inside SymbolKitProvider.

```tsx
import { SymbolKitProvider, Check } from 'symbolkit-react-native'

return (
  <SymbolKitProvider
    iconProps={{
      color: '#AAAAAA',
      strokeWidth: 1,
      width: '1em',
      height: '1em',
    }}
  >
    <SomeOtherContainer>
      <Check />
    </SomeOtherContainer>
  </SymbolKitProvider>
)
```

## Icon names

For the most part, the React components are named as PascalCase variations of their reference names (i.e. `add-circle-outline` becomes `AddCircleOutline`). However, some names have been altered slightly either because they start with numerical digits, which would lead to invalid React component names, or because they are organisations which use PascalCase in their brand names, such as `GitHub`. The altered names are as follows:

| SymbolKit Name     | React Native Component |
|------------------|------------------------|
| `1st-medal`      | `Medal1St`             |
| `4k-display`     | `Display4K`            |
| `4x4-cell`       | `Cell4X4`              |
| `360-view`       | `View360`              |
| `github`         | `GitHub`               |
| `github-outline` | `GitHubOutline`        |
| `gitlab-full`    | `GitLabFull`           |
| `linkedin`       | `LinkedIn`             |
| `tiktok`         | `TikTok`               |
| `youtube`        | `YouTube`              |
