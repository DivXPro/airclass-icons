// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionSadLineSvg from '@airclass/icons-svg/lib/asn/EmotionSadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionSadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionSadLineSvg}></AntdIcon>;
};

EmotionSadLine.displayName = 'EmotionSadLine';
EmotionSadLine.inheritAttrs = false;
export default EmotionSadLine;