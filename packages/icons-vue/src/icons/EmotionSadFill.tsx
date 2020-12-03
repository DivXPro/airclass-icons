// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionSadFillSvg from '@airclass/icons-svg/lib/asn/EmotionSadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionSadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionSadFillSvg}></AntdIcon>;
};

EmotionSadFill.displayName = 'EmotionSadFill';
EmotionSadFill.inheritAttrs = false;
export default EmotionSadFill;