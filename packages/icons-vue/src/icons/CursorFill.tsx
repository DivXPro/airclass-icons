// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CursorFillSvg from '@airclass/icons-svg/lib/asn/CursorFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CursorFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CursorFillSvg}></AntdIcon>;
};

CursorFill.displayName = 'CursorFill';
CursorFill.inheritAttrs = false;
export default CursorFill;