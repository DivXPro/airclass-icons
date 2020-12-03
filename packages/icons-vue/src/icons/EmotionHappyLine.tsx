// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionHappyLineSvg from '@airclass/icons-svg/lib/asn/EmotionHappyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionHappyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionHappyLineSvg}></AntdIcon>;
};

EmotionHappyLine.displayName = 'EmotionHappyLine';
EmotionHappyLine.inheritAttrs = false;
export default EmotionHappyLine;