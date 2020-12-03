// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SearchFillSvg from '@airclass/icons-svg/lib/asn/SearchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SearchFillSvg}></AntdIcon>;
};

SearchFill.displayName = 'SearchFill';
SearchFill.inheritAttrs = false;
export default SearchFill;