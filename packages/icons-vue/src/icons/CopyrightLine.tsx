// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyrightLineSvg from '@airclass/icons-svg/lib/asn/CopyrightLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightLineSvg}></AntdIcon>;
};

CopyrightLine.displayName = 'CopyrightLine';
CopyrightLine.inheritAttrs = false;
export default CopyrightLine;