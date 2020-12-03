// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AdminFillSvg from '@airclass/icons-svg/lib/asn/AdminFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdminFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AdminFillSvg}></AntdIcon>;
};

AdminFill.displayName = 'AdminFill';
AdminFill.inheritAttrs = false;
export default AdminFill;