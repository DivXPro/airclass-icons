// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MarkupLineSvg from '@airclass/icons-svg/lib/asn/MarkupLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkupLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MarkupLineSvg}></AntdIcon>;
};

MarkupLine.displayName = 'MarkupLine';
MarkupLine.inheritAttrs = false;
export default MarkupLine;