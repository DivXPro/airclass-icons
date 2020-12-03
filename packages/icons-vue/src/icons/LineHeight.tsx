// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LineHeightSvg from '@airclass/icons-svg/lib/asn/LineHeight';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineHeight = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineHeightSvg}></AntdIcon>;
};

LineHeight.displayName = 'LineHeight';
LineHeight.inheritAttrs = false;
export default LineHeight;