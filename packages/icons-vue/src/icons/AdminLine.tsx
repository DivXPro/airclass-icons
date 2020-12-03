// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AdminLineSvg from '@airclass/icons-svg/lib/asn/AdminLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdminLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdminLineSvg}></AntdIcon>;
};

AdminLine.displayName = 'AdminLine';
AdminLine.inheritAttrs = false;
export default AdminLine;