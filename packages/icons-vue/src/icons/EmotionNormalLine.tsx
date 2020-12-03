// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmotionNormalLineSvg from '@airclass/icons-svg/lib/asn/EmotionNormalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmotionNormalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmotionNormalLineSvg}></AntdIcon>;
};

EmotionNormalLine.displayName = 'EmotionNormalLine';
EmotionNormalLine.inheritAttrs = false;
export default EmotionNormalLine;