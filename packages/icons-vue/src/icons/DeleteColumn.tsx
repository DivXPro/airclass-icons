// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteColumnSvg from '@airclass/icons-svg/lib/asn/DeleteColumn';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteColumn = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteColumnSvg}></AntdIcon>;
};

DeleteColumn.displayName = 'DeleteColumn';
DeleteColumn.inheritAttrs = false;
export default DeleteColumn;