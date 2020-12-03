// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionFillSvg from '@airclass/icons-svg/lib/asn/EmotionFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionFillSvg}></AntdIcon>;
};

EmotionFill.displayName = 'EmotionFill';
EmotionFill.inheritAttrs = false;
export default EmotionFill;