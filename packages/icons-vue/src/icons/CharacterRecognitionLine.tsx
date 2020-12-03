// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CharacterRecognitionLineSvg from '@airclass/icons-svg/lib/asn/CharacterRecognitionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CharacterRecognitionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CharacterRecognitionLineSvg}></AntdIcon>;
};

CharacterRecognitionLine.displayName = 'CharacterRecognitionLine';
CharacterRecognitionLine.inheritAttrs = false;
export default CharacterRecognitionLine;