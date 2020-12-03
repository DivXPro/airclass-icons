// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BoxingLineSvg from '@airclass/icons-svg/lib/asn/BoxingLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxingLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxingLineSvg}></AntdIcon>;
};

BoxingLine.displayName = 'BoxingLine';
BoxingLine.inheritAttrs = false;
export default BoxingLine;