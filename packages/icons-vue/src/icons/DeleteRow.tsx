// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteRowSvg from '@airclass/icons-svg/lib/asn/DeleteRow';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteRow = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteRowSvg}></AntdIcon>;
};

DeleteRow.displayName = 'DeleteRow';
DeleteRow.inheritAttrs = false;
export default DeleteRow;