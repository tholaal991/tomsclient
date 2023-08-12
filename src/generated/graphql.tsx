import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type ApsAllShiftPlans = {
  __typename?: 'APSAllShiftPlans';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  modified_by?: Maybe<Scalars['String']['output']>;
  modified_on?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shiftType?: Maybe<ApsShiftType>;
  shift_type_id?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
};

export type ApsShiftType = {
  __typename?: 'APSShiftType';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CreateFtdformInput = {
  forty_eight_hour_score: Scalars['Float']['input'];
  good_health_score: Scalars['Float']['input'];
  id: Scalars['Int']['input'];
  operator_id: Scalars['Int']['input'];
  riskLevel?: InputMaybe<Scalars['String']['input']>;
  shift_id: Scalars['Int']['input'];
  taking_medicine_score: Scalars['Float']['input'];
  twenty_four_hour_score: Scalars['Float']['input'];
};

export type CreateInchargeInput = {
  rcn: Scalars['Int']['input'];
};

export type CreateShiftInput = {
  id: Scalars['Int']['input'];
};

export type CreateUserInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  rcn: Scalars['Int']['input'];
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserWithRoleInput = {
  rcn: Scalars['Float']['input'];
  roleId: Scalars['Int']['input'];
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Ftdapproval = {
  __typename?: 'Ftdapproval';
  id: Scalars['Int']['output'];
};

export type Ftdform = {
  __typename?: 'Ftdform';
  appliedOn?: Maybe<Scalars['DateTime']['output']>;
  approval?: Maybe<Ftdapproval>;
  approval_status?: Maybe<Scalars['Int']['output']>;
  approveId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  forty_eight_hour_score?: Maybe<Scalars['Int']['output']>;
  good_health_score?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  inchargeId?: Maybe<Scalars['Int']['output']>;
  operator: User;
  operatorId?: Maybe<Scalars['Int']['output']>;
  riskLevel?: Maybe<Scalars['String']['output']>;
  shiftId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taking_medicine_score?: Maybe<Scalars['Int']['output']>;
  twenty_four_hour_score?: Maybe<Scalars['Int']['output']>;
};

export type Incharge = {
  __typename?: 'Incharge';
  name?: Maybe<Scalars['String']['output']>;
  rcn?: Maybe<Scalars['Int']['output']>;
  shiftId?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFtdform: Ftdform;
  createIncharge: Incharge;
  createShift?: Maybe<Shift>;
  createUser: User;
  createUserWithRole: User;
  findAll: Ftdapproval;
  removeFtdapproval: Ftdapproval;
  removeFtdform: Ftdform;
  removeIncharge: Incharge;
  removePlan: ShiftPlans;
  removeShift: Shift;
  removeShiftPlan: ShiftPlans;
  removeUser: User;
  setUserRole: User;
  update: ShiftPlans;
  updateApprovalStatus: Ftdform;
  updateFtdapproval: Ftdapproval;
  updateFtdform: Ftdform;
  updateIncharge: Incharge;
  updateInchargesForShift: Shift;
  updateShift: Shift;
};


export type MutationCreateFtdformArgs = {
  createFtdformInput: CreateFtdformInput;
};


export type MutationCreateInchargeArgs = {
  createInchargeInput: CreateInchargeInput;
};


export type MutationCreateShiftArgs = {
  createShiftInput: CreateShiftInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserWithRoleArgs = {
  createUserWithRoleInput: CreateUserWithRoleInput;
};


export type MutationRemoveFtdapprovalArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFtdformArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveInchargeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePlanArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveShiftArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveShiftPlanArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSetUserRoleArgs = {
  data: SetUserRoleInput;
};


export type MutationUpdateArgs = {
  updateShiftplanInput: UpdateShiftplanInput;
};


export type MutationUpdateApprovalStatusArgs = {
  approvalStatus: Scalars['Int']['input'];
  formId: Scalars['Int']['input'];
};


export type MutationUpdateFtdapprovalArgs = {
  updateFtdapprovalInput: UpdateFtdapprovalInput;
};


export type MutationUpdateFtdformArgs = {
  updateFtdformInput: UpdateFtdformInput;
};


export type MutationUpdateInchargeArgs = {
  updateInchargeInput: UpdateInchargeInput;
};


export type MutationUpdateInchargesForShiftArgs = {
  newInchargeRcns: Array<Scalars['Int']['input']>;
  shiftId: Scalars['Int']['input'];
};


export type MutationUpdateShiftArgs = {
  updateShiftInput: UpdateShiftInput;
};

export type Query = {
  __typename?: 'Query';
  APSgetAllShiftPlans?: Maybe<Array<ApsAllShiftPlans>>;
  GetUserByUUID: User;
  GetUserRolesByRCN: Array<Scalars['Float']['output']>;
  findtShiftsForShiftPlanID: Array<Shift>;
  form: Ftdform;
  formsByInchargeId: Array<Ftdform>;
  formsByUserId: Array<Ftdform>;
  ftdapproval: Ftdapproval;
  ftdform: Array<Ftdform>;
  getAllForms: Array<Ftdform>;
  getAllIncharges: Array<Incharge>;
  getAllUsers: Array<User>;
  getFormById: Ftdform;
  getHello: Scalars['String']['output'];
  getInchargesByShiftId: Array<Incharge>;
  getShiftUsers?: Maybe<Array<User>>;
  getUserUUID: User;
  getoneshiftplan: ShiftPlans;
  incharge: Incharge;
  shift: Shift;
  shiftplans: Array<ShiftPlans>;
  user: User;
};


export type QueryGetUserByUuidArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryGetUserRolesByRcnArgs = {
  rcn: Scalars['Int']['input'];
};


export type QueryFindtShiftsForShiftPlanIdArgs = {
  shiftPlanID: Scalars['Int']['input'];
};


export type QueryFormArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFormsByInchargeIdArgs = {
  inchargeId: Scalars['Int']['input'];
};


export type QueryFormsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryFtdapprovalArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetFormByIdArgs = {
  formId: Scalars['Int']['input'];
};


export type QueryGetInchargesByShiftIdArgs = {
  shiftId: Scalars['Int']['input'];
};


export type QueryGetShiftUsersArgs = {
  shiftId: Scalars['Int']['input'];
};


export type QueryGetoneshiftplanArgs = {
  id: Scalars['Float']['input'];
};


export type QueryInchargeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryShiftArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type SetUserRoleInput = {
  role: UserRole;
  userId: Scalars['Float']['input'];
};

export type Shift = {
  __typename?: 'Shift';
  id?: Maybe<Scalars['Int']['output']>;
  incharges?: Maybe<Array<Incharge>>;
  shift_description?: Maybe<Scalars['String']['output']>;
  shift_end?: Maybe<Scalars['DateTime']['output']>;
  shift_name?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  start_time?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<User>;
};

export type ShiftPlans = {
  __typename?: 'ShiftPlans';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shiftType?: Maybe<Scalars['Int']['output']>;
  valid?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateFtdapprovalInput = {
  approverId?: InputMaybe<Scalars['Int']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  inchargeId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFtdformInput = {
  approval_status?: InputMaybe<Scalars['Int']['input']>;
  approveId?: InputMaybe<Scalars['Int']['input']>;
  forty_eight_hour_score?: InputMaybe<Scalars['Int']['input']>;
  good_health_score?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  inchargeId?: InputMaybe<Scalars['Int']['input']>;
  operatorId?: InputMaybe<Scalars['Int']['input']>;
  operator_id?: InputMaybe<Scalars['Int']['input']>;
  riskLevel?: InputMaybe<Scalars['String']['input']>;
  shiftId?: InputMaybe<Scalars['Int']['input']>;
  shift_id?: InputMaybe<Scalars['Int']['input']>;
  taking_medicine_score?: InputMaybe<Scalars['Int']['input']>;
  twenty_four_hour_score?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateInchargeInput = {
  id: Scalars['Int']['input'];
  rcn?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateShiftInput = {
  id: Scalars['Int']['input'];
};

export type UpdateShiftplanInput = {
  descrpton: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  shiftType: Scalars['Int']['input'];
  valid: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']['output']>;
  rcn?: Maybe<Scalars['Int']['output']>;
  roletype?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export enum UserRole {
  FtdAdmin = 'FTDAdmin',
  FtdIncharge = 'FTDIncharge',
  FtdOperator = 'FTDOperator',
  NoRole = 'NoRole',
  SuperAdmin = 'SuperAdmin'
}

export type FormsByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type FormsByUserIdQuery = { __typename?: 'Query', formsByUserId: Array<{ __typename?: 'Ftdform', id?: number | null, approveId?: number | null, approval_status?: number | null, shiftId?: number | null, inchargeId?: number | null }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', name?: string | null, rcn?: number | null }> };

export type FormsByInchargeIdQueryVariables = Exact<{
  inchargeId: Scalars['Int']['input'];
}>;


export type FormsByInchargeIdQuery = { __typename?: 'Query', formsByInchargeId: Array<{ __typename?: 'Ftdform', id?: number | null, operatorId?: number | null, shiftId?: number | null, approval_status?: number | null }> };

export type UpdateApprovalStatusMutationVariables = Exact<{
  formId: Scalars['Int']['input'];
  approvalStatus: Scalars['Int']['input'];
}>;


export type UpdateApprovalStatusMutation = { __typename?: 'Mutation', updateApprovalStatus: { __typename?: 'Ftdform', id?: number | null, approval_status?: number | null } };

export type GetFtdformWithOperatorQueryVariables = Exact<{
  formId: Scalars['Int']['input'];
}>;


export type GetFtdformWithOperatorQuery = { __typename?: 'Query', form: { __typename?: 'Ftdform', id?: number | null, operator: { __typename?: 'User', rcn?: number | null, name?: string | null } } };

export type UpdateFtdformMutationVariables = Exact<{
  updateFtdformInput: UpdateFtdformInput;
}>;


export type UpdateFtdformMutation = { __typename?: 'Mutation', updateFtdform: { __typename?: 'Ftdform', id?: number | null, operatorId?: number | null, shiftId?: number | null, inchargeId?: number | null, approval_status?: number | null, good_health_score?: number | null, taking_medicine_score?: number | null, twenty_four_hour_score?: number | null, forty_eight_hour_score?: number | null, operator: { __typename?: 'User', rcn?: number | null } } };

export type GetAllFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFormsQuery = { __typename?: 'Query', getAllForms: Array<{ __typename?: 'Ftdform', id?: number | null, shiftId?: number | null, approval_status?: number | null, operatorId?: number | null, riskLevel?: string | null, createdAt?: any | null, appliedOn?: any | null, operator: { __typename?: 'User', rcn?: number | null, name?: string | null } }> };

export type ShiftplansQueryVariables = Exact<{ [key: string]: never; }>;


export type ShiftplansQuery = { __typename?: 'Query', shiftplans: Array<{ __typename?: 'ShiftPlans', id?: number | null, valid?: boolean | null, description?: string | null }> };

export type FindtShiftsForShiftPlanIdQueryVariables = Exact<{
  shiftPlanId: Scalars['Int']['input'];
}>;


export type FindtShiftsForShiftPlanIdQuery = { __typename?: 'Query', findtShiftsForShiftPlanID: Array<{ __typename?: 'Shift', id?: number | null, shift_description?: string | null, shift_end?: any | null, shift_name?: string | null, start_time?: any | null, start_date?: any | null }> };

export type GetShiftUsersQueryVariables = Exact<{
  shiftId: Scalars['Int']['input'];
}>;


export type GetShiftUsersQuery = { __typename?: 'Query', getShiftUsers?: Array<{ __typename?: 'User', rcn?: number | null, name?: string | null }> | null };

export type MutationMutationVariables = Exact<{
  shiftId: Scalars['Int']['input'];
  newInchargeRcns: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type MutationMutation = { __typename?: 'Mutation', updateInchargesForShift: { __typename?: 'Shift', id?: number | null, shift_description?: string | null, incharges?: Array<{ __typename?: 'Incharge', rcn?: number | null, name?: string | null }> | null } };

export type GetInchargesByShiftIdQueryVariables = Exact<{
  shiftId: Scalars['Int']['input'];
}>;


export type GetInchargesByShiftIdQuery = { __typename?: 'Query', getInchargesByShiftId: Array<{ __typename?: 'Incharge', rcn?: number | null, name?: string | null }> };

export type CreateInchargeMutationVariables = Exact<{
  createInchargeInput: CreateInchargeInput;
}>;


export type CreateInchargeMutation = { __typename?: 'Mutation', createIncharge: { __typename?: 'Incharge', rcn?: number | null } };

export type GetAllInchargesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInchargesQuery = { __typename?: 'Query', getAllIncharges: Array<{ __typename?: 'Incharge', rcn?: number | null, name?: string | null, shiftId?: number | null }> };


export const FormsByUserIdDocument = gql`
    query FormsByUserId($userId: Int!) {
  formsByUserId(userId: $userId) {
    id
    approveId
    approval_status
    shiftId
    inchargeId
  }
}
    `;

/**
 * __useFormsByUserIdQuery__
 *
 * To run a query within a React component, call `useFormsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFormsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FormsByUserIdQuery, FormsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormsByUserIdQuery, FormsByUserIdQueryVariables>(FormsByUserIdDocument, options);
      }
export function useFormsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormsByUserIdQuery, FormsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormsByUserIdQuery, FormsByUserIdQueryVariables>(FormsByUserIdDocument, options);
        }
export type FormsByUserIdQueryHookResult = ReturnType<typeof useFormsByUserIdQuery>;
export type FormsByUserIdLazyQueryHookResult = ReturnType<typeof useFormsByUserIdLazyQuery>;
export type FormsByUserIdQueryResult = Apollo.QueryResult<FormsByUserIdQuery, FormsByUserIdQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    name
    rcn
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const FormsByInchargeIdDocument = gql`
    query FormsByInchargeId($inchargeId: Int!) {
  formsByInchargeId(inchargeId: $inchargeId) {
    id
    operatorId
    shiftId
    approval_status
  }
}
    `;

/**
 * __useFormsByInchargeIdQuery__
 *
 * To run a query within a React component, call `useFormsByInchargeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormsByInchargeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormsByInchargeIdQuery({
 *   variables: {
 *      inchargeId: // value for 'inchargeId'
 *   },
 * });
 */
export function useFormsByInchargeIdQuery(baseOptions: Apollo.QueryHookOptions<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>(FormsByInchargeIdDocument, options);
      }
export function useFormsByInchargeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>(FormsByInchargeIdDocument, options);
        }
export type FormsByInchargeIdQueryHookResult = ReturnType<typeof useFormsByInchargeIdQuery>;
export type FormsByInchargeIdLazyQueryHookResult = ReturnType<typeof useFormsByInchargeIdLazyQuery>;
export type FormsByInchargeIdQueryResult = Apollo.QueryResult<FormsByInchargeIdQuery, FormsByInchargeIdQueryVariables>;
export const UpdateApprovalStatusDocument = gql`
    mutation UpdateApprovalStatus($formId: Int!, $approvalStatus: Int!) {
  updateApprovalStatus(formId: $formId, approvalStatus: $approvalStatus) {
    id
    approval_status
  }
}
    `;
export type UpdateApprovalStatusMutationFn = Apollo.MutationFunction<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>;

/**
 * __useUpdateApprovalStatusMutation__
 *
 * To run a mutation, you first call `useUpdateApprovalStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApprovalStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApprovalStatusMutation, { data, loading, error }] = useUpdateApprovalStatusMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *      approvalStatus: // value for 'approvalStatus'
 *   },
 * });
 */
export function useUpdateApprovalStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>(UpdateApprovalStatusDocument, options);
      }
export type UpdateApprovalStatusMutationHookResult = ReturnType<typeof useUpdateApprovalStatusMutation>;
export type UpdateApprovalStatusMutationResult = Apollo.MutationResult<UpdateApprovalStatusMutation>;
export type UpdateApprovalStatusMutationOptions = Apollo.BaseMutationOptions<UpdateApprovalStatusMutation, UpdateApprovalStatusMutationVariables>;
export const GetFtdformWithOperatorDocument = gql`
    query GetFtdformWithOperator($formId: Int!) {
  form(id: $formId) {
    id
    operator {
      rcn
      name
    }
  }
}
    `;

/**
 * __useGetFtdformWithOperatorQuery__
 *
 * To run a query within a React component, call `useGetFtdformWithOperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFtdformWithOperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFtdformWithOperatorQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useGetFtdformWithOperatorQuery(baseOptions: Apollo.QueryHookOptions<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>(GetFtdformWithOperatorDocument, options);
      }
export function useGetFtdformWithOperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>(GetFtdformWithOperatorDocument, options);
        }
export type GetFtdformWithOperatorQueryHookResult = ReturnType<typeof useGetFtdformWithOperatorQuery>;
export type GetFtdformWithOperatorLazyQueryHookResult = ReturnType<typeof useGetFtdformWithOperatorLazyQuery>;
export type GetFtdformWithOperatorQueryResult = Apollo.QueryResult<GetFtdformWithOperatorQuery, GetFtdformWithOperatorQueryVariables>;
export const UpdateFtdformDocument = gql`
    mutation UpdateFtdform($updateFtdformInput: UpdateFtdformInput!) {
  updateFtdform(updateFtdformInput: $updateFtdformInput) {
    id
    operatorId
    shiftId
    inchargeId
    approval_status
    good_health_score
    taking_medicine_score
    twenty_four_hour_score
    forty_eight_hour_score
    operator {
      rcn
    }
  }
}
    `;
export type UpdateFtdformMutationFn = Apollo.MutationFunction<UpdateFtdformMutation, UpdateFtdformMutationVariables>;

/**
 * __useUpdateFtdformMutation__
 *
 * To run a mutation, you first call `useUpdateFtdformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFtdformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFtdformMutation, { data, loading, error }] = useUpdateFtdformMutation({
 *   variables: {
 *      updateFtdformInput: // value for 'updateFtdformInput'
 *   },
 * });
 */
export function useUpdateFtdformMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFtdformMutation, UpdateFtdformMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFtdformMutation, UpdateFtdformMutationVariables>(UpdateFtdformDocument, options);
      }
export type UpdateFtdformMutationHookResult = ReturnType<typeof useUpdateFtdformMutation>;
export type UpdateFtdformMutationResult = Apollo.MutationResult<UpdateFtdformMutation>;
export type UpdateFtdformMutationOptions = Apollo.BaseMutationOptions<UpdateFtdformMutation, UpdateFtdformMutationVariables>;
export const GetAllFormsDocument = gql`
    query GetAllForms {
  getAllForms {
    id
    shiftId
    approval_status
    operatorId
    riskLevel
    createdAt
    appliedOn
    operator {
      rcn
      name
    }
  }
}
    `;

/**
 * __useGetAllFormsQuery__
 *
 * To run a query within a React component, call `useGetAllFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFormsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFormsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFormsQuery, GetAllFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFormsQuery, GetAllFormsQueryVariables>(GetAllFormsDocument, options);
      }
export function useGetAllFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFormsQuery, GetAllFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFormsQuery, GetAllFormsQueryVariables>(GetAllFormsDocument, options);
        }
export type GetAllFormsQueryHookResult = ReturnType<typeof useGetAllFormsQuery>;
export type GetAllFormsLazyQueryHookResult = ReturnType<typeof useGetAllFormsLazyQuery>;
export type GetAllFormsQueryResult = Apollo.QueryResult<GetAllFormsQuery, GetAllFormsQueryVariables>;
export const ShiftplansDocument = gql`
    query Shiftplans {
  shiftplans {
    id
    valid
    description
  }
}
    `;

/**
 * __useShiftplansQuery__
 *
 * To run a query within a React component, call `useShiftplansQuery` and pass it any options that fit your needs.
 * When your component renders, `useShiftplansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShiftplansQuery({
 *   variables: {
 *   },
 * });
 */
export function useShiftplansQuery(baseOptions?: Apollo.QueryHookOptions<ShiftplansQuery, ShiftplansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShiftplansQuery, ShiftplansQueryVariables>(ShiftplansDocument, options);
      }
export function useShiftplansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShiftplansQuery, ShiftplansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShiftplansQuery, ShiftplansQueryVariables>(ShiftplansDocument, options);
        }
export type ShiftplansQueryHookResult = ReturnType<typeof useShiftplansQuery>;
export type ShiftplansLazyQueryHookResult = ReturnType<typeof useShiftplansLazyQuery>;
export type ShiftplansQueryResult = Apollo.QueryResult<ShiftplansQuery, ShiftplansQueryVariables>;
export const FindtShiftsForShiftPlanIdDocument = gql`
    query FindtShiftsForShiftPlanID($shiftPlanId: Int!) {
  findtShiftsForShiftPlanID(shiftPlanID: $shiftPlanId) {
    id
    shift_description
    shift_end
    shift_name
    start_time
    start_date
  }
}
    `;

/**
 * __useFindtShiftsForShiftPlanIdQuery__
 *
 * To run a query within a React component, call `useFindtShiftsForShiftPlanIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindtShiftsForShiftPlanIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindtShiftsForShiftPlanIdQuery({
 *   variables: {
 *      shiftPlanId: // value for 'shiftPlanId'
 *   },
 * });
 */
export function useFindtShiftsForShiftPlanIdQuery(baseOptions: Apollo.QueryHookOptions<FindtShiftsForShiftPlanIdQuery, FindtShiftsForShiftPlanIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindtShiftsForShiftPlanIdQuery, FindtShiftsForShiftPlanIdQueryVariables>(FindtShiftsForShiftPlanIdDocument, options);
      }
export function useFindtShiftsForShiftPlanIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindtShiftsForShiftPlanIdQuery, FindtShiftsForShiftPlanIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindtShiftsForShiftPlanIdQuery, FindtShiftsForShiftPlanIdQueryVariables>(FindtShiftsForShiftPlanIdDocument, options);
        }
export type FindtShiftsForShiftPlanIdQueryHookResult = ReturnType<typeof useFindtShiftsForShiftPlanIdQuery>;
export type FindtShiftsForShiftPlanIdLazyQueryHookResult = ReturnType<typeof useFindtShiftsForShiftPlanIdLazyQuery>;
export type FindtShiftsForShiftPlanIdQueryResult = Apollo.QueryResult<FindtShiftsForShiftPlanIdQuery, FindtShiftsForShiftPlanIdQueryVariables>;
export const GetShiftUsersDocument = gql`
    query GetShiftUsers($shiftId: Int!) {
  getShiftUsers(shiftId: $shiftId) {
    rcn
    name
  }
}
    `;

/**
 * __useGetShiftUsersQuery__
 *
 * To run a query within a React component, call `useGetShiftUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftUsersQuery({
 *   variables: {
 *      shiftId: // value for 'shiftId'
 *   },
 * });
 */
export function useGetShiftUsersQuery(baseOptions: Apollo.QueryHookOptions<GetShiftUsersQuery, GetShiftUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShiftUsersQuery, GetShiftUsersQueryVariables>(GetShiftUsersDocument, options);
      }
export function useGetShiftUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShiftUsersQuery, GetShiftUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShiftUsersQuery, GetShiftUsersQueryVariables>(GetShiftUsersDocument, options);
        }
export type GetShiftUsersQueryHookResult = ReturnType<typeof useGetShiftUsersQuery>;
export type GetShiftUsersLazyQueryHookResult = ReturnType<typeof useGetShiftUsersLazyQuery>;
export type GetShiftUsersQueryResult = Apollo.QueryResult<GetShiftUsersQuery, GetShiftUsersQueryVariables>;
export const MutationDocument = gql`
    mutation Mutation($shiftId: Int!, $newInchargeRcns: [Int!]!) {
  updateInchargesForShift(shiftId: $shiftId, newInchargeRcns: $newInchargeRcns) {
    id
    shift_description
    incharges {
      rcn
      name
    }
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      shiftId: // value for 'shiftId'
 *      newInchargeRcns: // value for 'newInchargeRcns'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const GetInchargesByShiftIdDocument = gql`
    query GetInchargesByShiftId($shiftId: Int!) {
  getInchargesByShiftId(shiftId: $shiftId) {
    rcn
    name
  }
}
    `;

/**
 * __useGetInchargesByShiftIdQuery__
 *
 * To run a query within a React component, call `useGetInchargesByShiftIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInchargesByShiftIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInchargesByShiftIdQuery({
 *   variables: {
 *      shiftId: // value for 'shiftId'
 *   },
 * });
 */
export function useGetInchargesByShiftIdQuery(baseOptions: Apollo.QueryHookOptions<GetInchargesByShiftIdQuery, GetInchargesByShiftIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInchargesByShiftIdQuery, GetInchargesByShiftIdQueryVariables>(GetInchargesByShiftIdDocument, options);
      }
export function useGetInchargesByShiftIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInchargesByShiftIdQuery, GetInchargesByShiftIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInchargesByShiftIdQuery, GetInchargesByShiftIdQueryVariables>(GetInchargesByShiftIdDocument, options);
        }
export type GetInchargesByShiftIdQueryHookResult = ReturnType<typeof useGetInchargesByShiftIdQuery>;
export type GetInchargesByShiftIdLazyQueryHookResult = ReturnType<typeof useGetInchargesByShiftIdLazyQuery>;
export type GetInchargesByShiftIdQueryResult = Apollo.QueryResult<GetInchargesByShiftIdQuery, GetInchargesByShiftIdQueryVariables>;
export const CreateInchargeDocument = gql`
    mutation CreateIncharge($createInchargeInput: CreateInchargeInput!) {
  createIncharge(createInchargeInput: $createInchargeInput) {
    rcn
  }
}
    `;
export type CreateInchargeMutationFn = Apollo.MutationFunction<CreateInchargeMutation, CreateInchargeMutationVariables>;

/**
 * __useCreateInchargeMutation__
 *
 * To run a mutation, you first call `useCreateInchargeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInchargeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInchargeMutation, { data, loading, error }] = useCreateInchargeMutation({
 *   variables: {
 *      createInchargeInput: // value for 'createInchargeInput'
 *   },
 * });
 */
export function useCreateInchargeMutation(baseOptions?: Apollo.MutationHookOptions<CreateInchargeMutation, CreateInchargeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInchargeMutation, CreateInchargeMutationVariables>(CreateInchargeDocument, options);
      }
export type CreateInchargeMutationHookResult = ReturnType<typeof useCreateInchargeMutation>;
export type CreateInchargeMutationResult = Apollo.MutationResult<CreateInchargeMutation>;
export type CreateInchargeMutationOptions = Apollo.BaseMutationOptions<CreateInchargeMutation, CreateInchargeMutationVariables>;
export const GetAllInchargesDocument = gql`
    query GetAllIncharges {
  getAllIncharges {
    rcn
    name
    shiftId
  }
}
    `;

/**
 * __useGetAllInchargesQuery__
 *
 * To run a query within a React component, call `useGetAllInchargesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllInchargesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllInchargesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllInchargesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllInchargesQuery, GetAllInchargesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllInchargesQuery, GetAllInchargesQueryVariables>(GetAllInchargesDocument, options);
      }
export function useGetAllInchargesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllInchargesQuery, GetAllInchargesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllInchargesQuery, GetAllInchargesQueryVariables>(GetAllInchargesDocument, options);
        }
export type GetAllInchargesQueryHookResult = ReturnType<typeof useGetAllInchargesQuery>;
export type GetAllInchargesLazyQueryHookResult = ReturnType<typeof useGetAllInchargesLazyQuery>;
export type GetAllInchargesQueryResult = Apollo.QueryResult<GetAllInchargesQuery, GetAllInchargesQueryVariables>;