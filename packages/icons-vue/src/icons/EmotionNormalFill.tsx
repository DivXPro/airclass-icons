// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionNormalFillSvg from '@airclass/icons-svg/lib/asn/EmotionNormalFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionNormalFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionNormalFillSvg}></AntdIcon>;
};

EmotionNormalFill.displayName = 'EmotionNormalFill';
EmotionNormalFill.inheritAttrs = false;
export default EmotionNormalFill;