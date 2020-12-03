// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionLineSvg from '@airclass/icons-svg/lib/asn/EmotionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionLineSvg}></AntdIcon>;
};

EmotionLine.displayName = 'EmotionLine';
EmotionLine.inheritAttrs = false;
export default EmotionLine;