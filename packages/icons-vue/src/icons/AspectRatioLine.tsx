// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AspectRatioLineSvg from '@airclass/icons-svg/lib/asn/AspectRatioLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AspectRatioLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AspectRatioLineSvg}></AntdIcon>;
};

AspectRatioLine.displayName = 'AspectRatioLine';
AspectRatioLine.inheritAttrs = false;
export default AspectRatioLine;