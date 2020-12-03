// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CursorLineSvg from '@airclass/icons-svg/lib/asn/CursorLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CursorLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CursorLineSvg}></AntdIcon>;
};

CursorLine.displayName = 'CursorLine';
CursorLine.inheritAttrs = false;
export default CursorLine;